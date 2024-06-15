import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

const ChangeAvatar = ({ user }) => {
  const [file, setFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAvatar = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id);
      console.log(data);
      setAvatarUrl(data[0].avatar_url);
    };
    loadAvatar();
  }, []);

  const handleChangeAvatar = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Por favor, selecciona un archivo.");
      return;
    }

    setLoading(true);
    setError(null);

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `${fileName}`;
    console.log(filePath);

    try {
      // Subir la imagen al storage de Supabase
      const { data: img, error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });
      console.log(img);

      // Obtener la URL pública de la imagen subida
      const { data: dataUrl } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);
      // Actualizar el perfil del usuario con la URL del nuevo avatar
      console.log(dataUrl.publicUrl);
      const { data, error: updateError } = await supabase
        .from("profiles")
        .update({ avatar_url: dataUrl.publicUrl })
        .eq("id", user.id)
        .select("*");
      console.log(user.id);
      console.log(data);
      console.log(updateError);
      if (updateError) {
        throw updateError;
      }

      // Actualizar el estado del avatar URL
      setAvatarUrl(dataUrl.publicUrl);
      setFile(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <img
          className="rounded-full border-1 p-1 h-24 w-24"
          src={avatarUrl}
          alt="Avatar"
        />
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={(e) => handleChangeAvatar(e)}
          className="flex flex-col gap-2 mt-4"
        >
          <input
            type="file"
            accept="image/*"
            id="file-avatar"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="flex gap-1 items-center">
            <label
              className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 text-center cursor-pointer"
              htmlFor="file-avatar"
            >
              Seleccionar
            </label>
            {file && <p>{file.name}</p>}
          </div>
          <button
            type="submit"
            className="bg-green-600 px-2 py-1 rounded hover:bg-green-700 text-center"
            disabled={loading}
          >
            {loading ? "Cambiando..." : "Cambiar"}
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default ChangeAvatar;
