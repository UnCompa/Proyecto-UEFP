import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { FaTrashAlt } from "react-icons/fa";

const CommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data: commentsData, error } = await supabase
        .from("comments")
        .select("*")
        .eq("video_id", videoId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error al obtener comentarios:", error.message);
        return;
      }

      // Obtener datos de usuario para cada comentario
      for (const comment of commentsData) {
        const { data: userData, error: userError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", comment.user_id);

        if (userError) {
          console.error("Error al obtener datos de usuario:", userError.message);
          continue;
        }

        // Agregar datos de usuario al comentario
        comment.userData = userData[0];
      }
      const {data: currentUserData} = await supabase.auth.getUser()
      setCurrentUser(currentUserData.user)
      setComments(commentsData);
      setLoading(false);
    };

    fetchComments();
  }, [videoId]);

  const handleDelete = async (commentId) => {
    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentId);

    if (error) {
      console.error("Error al eliminar comentario:", error.message);
      return;
    }

    // Actualizar la lista de comentarios después de eliminar
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 rounded-lg p-2 my-2 flex flex-col gap-2">
      {loading ? (
        <p>Cargando comentarios...</p>
      ) : comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="flex p-2 bg-zinc-50 dark:bg-zinc-950 rounded"
          >
            <div className="flex p-1 items-center justify-end">
              {/* Mostrar botón de eliminar si el comentario es del usuario actual */}
              {currentUser && comment.user_id === currentUser.id && (
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  <FaTrashAlt />
                </button>
              )}
            </div>
            <div className="p-1">
              <img
                className="h-12 w-12 rounded-full"
                src={comment.userData?.avatar_url}
                alt=""
              />
            </div>
            <div className="p-1">
              <span className="font-bold">{comment.userData?.username}</span>
              <p>{comment.comment_text}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay comentarios.</p>
      )}
    </div>
  );
};

export default CommentsList;
