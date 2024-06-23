import { useEffect } from "react";
import "dropzone/dist/basic.css";
import "dropzone/dist/dropzone.css";
import Dropzone from "dropzone";
import { supabase } from "../../../lib/supabase";

const UploadGallery = ({lang = "es"}) => {
  useEffect(() => {
    const myDropzone = new Dropzone(".dropzone", {
      dictDefaultMessage: lang === "es" ? "Arrastra y suelta tus archivos aqui, o presiona para abrir el explorardor" : "Drag and drop your files here, or press to open the explorer",
      url: "/", // Esta URL no se usa ya que vamos a manejar la subida manualmente
      acceptedFiles: "image/*",
    });

    myDropzone.on("addedfile", (file) => {
      const namefile = file.name;
      // Se debe usar una promesa o async/await aquí
      (async () => {
        const { data, error } = await supabase.storage
          .from("galeria")
          .upload(namefile, file, {
            upsert: true,
          });
        if (data) {
          window.location.reload();
        }
      })();
    });

    // Cleanup Dropzone instance on unmount
    return () => {
      myDropzone.destroy();
    };
  }, []);

  return (
    <div className="text-black dark:text-white">
      <h3 className="py-1">
        {lang === "es" ? "Subir imagenes:" : "Upload images"}
      </h3>
      <div className="dropzone bg-stone-100 dark:bg-slate-950"></div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">
        {lang === "es" ? "Suba responsablemente las imagenes" : "Responsibly upload images"}
        </span>
        <span className="text-xs">
          {lang === "es" ? "Puede que tarde en reflejar los cambios" : "It may take time to reflect the changes"}
          </span>
      </div>
    </div>
  );
};

export default UploadGallery;
