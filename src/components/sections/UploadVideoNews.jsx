import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Toaster, toast } from "sonner";
const UploadVideoNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(title, description, file);

    if (!file) {
      console.error("No file selected");
      return;
    }

    // Subir el archivo al almacenamiento de Supabase
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("videos")
      .upload(`${file.name}`, file);
    console.log(uploadData);
    console.log(uploadError);
    if (uploadError) {
      toast.error("Caracteres invalidos, renombre el archivo")
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
      .insert([{ title, description, video_url: videoUrl }]);

    if (insertError) {
      console.error("Error inserting video metadata:", insertError);
      return;
    }

    console.log("Video uploaded and metadata saved:", insertData);
    window.location.reload();
  };

  return (
    <>
    <Toaster/>
      <h2>Sube tus archivos</h2>
      <form
        onSubmit={handleUpload}
        className="flex flex-col bg-zinc-900 rounded-lg p-2 font-Rubik font-bold gap-2"
      >
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default UploadVideoNews;
