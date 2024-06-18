import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { FaHeart, FaTrash } from "react-icons/fa";
import { supabase } from "../../../lib/supabase";
import TextoRecortado from "../../Utils/TextoRecortado";

const VideosList = ({ videosMetadata, lang = "es" }) => {
  const [videos, setVideos] = useState(videosMetadata || []);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
      setCurrentUser(user);
    };

    fetchUser();
  }, []);

  const handleDelete = async (videoId, videoUrl) => {
    try {
      // Eliminar el video del almacenamiento de Supabase
      const { data, error: storageError } = await supabase.storage
        .from("videos")
        .remove([videoUrl]);
      console.log(data);
      console.log(storageError);

      if (storageError) {
        throw new Error("Error al eliminar el video del almacenamiento");
      }

      // Eliminar la entrada de metadatos de video de la tabla videos_metadata
      const { error: metadataError } = await supabase
        .from("videos_metadata")
        .delete()
        .eq("id", videoId);

      if (metadataError) {
        throw new Error("Error al eliminar la metadata del video");
      }
      const { data: likesData, error: likesError } = await supabase
        .from("likes")
        .delete()
        .eq("video_id", videoId);
      // Actualizar la lista de videos después de eliminar
      setVideos(videos.filter((video) => video.id !== videoId));
      const { data: commentsData, error: commentsError } = await supabase
        .from("comments")
        .delete()
        .eq("video_id", videoId);
      console.log(likesData);
      console.log(likesError);
      console.log(commentsData);
      console.log(commentsError);
      // Actualizar la lista de videos después de eliminar
      setVideos(videos.filter((video) => video.id !== videoId));

      console.log("Video eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el video:", error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos?.map((item) => (
        <div
          key={item.id}
          className="bg-zinc-200 dark:bg-zinc-900 snap-center h-full w-full p-2 rounded-lg shadow-xl"
        >
          <div>
            <video controls src={item.video_url} />
          </div>
          <div className="grid grid-cols-2 mt-2">
            <span className="flex items-center justify-center gap-2">
              <FaHeart className="dark:text-red-300" />
              {item.likes}
            </span>
            <span>
              {lang === "es" ? "Creado en" : "Created at:"}{" "}
              {dayjs(item.created_at).format("DD/MM/YYYY")}
            </span>
          </div>
          <div className="p-2">
            <h2 className="text-xl font-extrabold">{item.title}</h2>
            <TextoRecortado texto={item.description} />
          </div>
          {currentUser && item.user_id === currentUser.id && (
            <div className="flex justify-end p-2">
              <button
                onClick={() => handleDelete(item.id, item.file_name)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
              >
                <FaTrash className="inline mr-1" /> Eliminar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideosList;
