import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Toaster, toast } from "sonner";
import Loader from "../Ui/Loader";
const UploadVideoNews = ({ lang = "es" }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }
    setLoading(true);
    // Subir el archivo al almacenamiento de Supabase
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("videos")
      .upload(`${file.name}`, file);
    if (uploadError) {
      setLoading(false);
      toast.error("Caracteres invalidos, renombre el archivo");
      console.error("Error uploading video:", uploadError);
      return;
    }

    // Obtener la URL pública del archivo subido
    const videoUrl = supabase.storage
      .from("videos")
      .getPublicUrl(`${file.name}`).data.publicUrl;

    // Insertar los metadatos en la base de datos
    const { data: insertData, error: insertError } = await supabase
      .from("videos_metadata")
      .insert([
        { title, description, video_url: videoUrl, file_name: file.name },
      ]);

    if (insertError) {
      setLoading(false);
      console.error("Error inserting video metadata:", insertError);
      return;
    }

    setLoading(false);
    console.log("Video uploaded and metadata saved:", insertData);
    window.location.reload();
  };

  return (
    <>
      <Toaster richColors />
      <h2 className="font-bold my-2 px-2 text-xl md:text-2xl">
        {lang === "es" ? "Sube tus archivos" : "Upload your files"}
      </h2>
      <form
        onSubmit={handleUpload}
        className="flex flex-col bg-zinc-200 my-2 dark:bg-zinc-900 rounded-lg p-2 font-Rubik font-bold gap-2"
      >
        <input
          className="outline-none px-2 py-1 rounded my-1 font-normal"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder={lang === "es" ? "Titulo" : "Title"}
        />
        <input
          className="outline-none px-2 py-1 rounded my-1 font-normal"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder={lang === "es" ? "Descripcion" : "Description"}
        />
        <div className="flex gap-2 items-center">
          <label
            htmlFor="file"
            className="bg-red-400 dark:bg-red-600 w-max px-4 rounded"
          >
            {lang === "es" ? "Examinar" : "Examine"}
          </label>
          {file ? (
            <p>{file.name}</p>
          ) : (
            <p>
              {lang === "es" ? "Selecciona tu archivo" : "Select your file"}
            </p>
          )}
        </div>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="hidden"
        />
        {lang === "es" ? (
          <span className="text-xs">
            Tamaño maximo de archivo es de <strong>50MB</strong>
          </span>
        ) : (
          <span className="text-xs">
            Maximum file size is <strong>50MB</strong>
          </span>
        )}
        {lang === "es" ? (
          <span className="text-xs font-light">
            Se recomienda subir videos en formato horizontal
          </span>
        ) : (
          <span className="text-xs font-light">
            It is recommended to upload videos in horizontal format
          </span>
        )}
        <button
          type="submit"
          className="bg-emerald-400 dark:bg-emerald-600 rounded my-1 py-1"
        >
          {loading ? (
            <Loader height="h-5" width="w-5" />
          ) : lang === "es" ? (
            "Subir video"
          ) : (
            "Upload video"
          )}
        </button>
      </form>
    </>
  );
};

export default UploadVideoNews;
