import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

const GalleryChange = ({lang = "es"}) => {
  const [imgsUrl, setImgsUrl] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el cargando

  useEffect(() => {
    const loadImgs = async () => {
      const { data, error } = await supabase.storage.from("galeria").list("");
      if (error) {
        console.error("Error al listar las imágenes:", error);
        setLoading(false);
        return;
      }

      const imgsUrl = data?.map((file) => {
        const { publicUrl } = supabase.storage.from("galeria").getPublicUrl(file.name).data;
        return {
          publicUrl,
          ...file,
        };
      });

      setImgsUrl(imgsUrl);
      setLoading(false);
    };

    loadImgs();
  }, []);

  const handleDelete = async (name) => {
    console.log(name);
    const { error } = await supabase.storage.from("galeria").remove([name]);

    if (error) {
      console.error("Error al eliminar la imagen:", error);
      return;
    }

    console.log("Imagen eliminada exitosamente");
    setImgsUrl(imgsUrl.filter((img) => img.name !== name)); // Actualizar el estado sin recargar la página
  };

  if (loading) {
    return <p>
      {lang === "es" ? "Cargando imagenes" : "Loading images"}
    </p>;
  }

  return (
    <>
      {imgsUrl.length > 0 ? (
        imgsUrl.map((img) => (
          <div key={img.id} className="bg-slate-50 dark:bg-slate-950 p-2">
            <img
              src={img.publicUrl}
              alt=""
              className="object-cover aspect-square h-52 rounded mx-auto p-2 shadow-xl"
              loading="lazy"
            />
            <div>
              <span className="text-sm text-center font-Rubik font-light">
                {img.name}
              </span>
            </div>
            <div>
              <button
                className="text-center text-red-500 border border-red-500 w-full py-1 my-1 hover:bg-red-500 hover:text-white transition-all"
                onClick={() => handleDelete(img.name)}
              >
                {lang === "es" ? "Eliminar" : "Delete"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay imágenes</p>
      )}
    </>
  );
};

export default GalleryChange;
