import { useEffect } from "react";
import "dropzone/dist/basic.css";
import "dropzone/dist/dropzone.css";
import Dropzone from "dropzone";
import { supabase } from "../../../lib/supabase";

const UploadGallery = () => {
  useEffect(() => {
    const myDropzone = new Dropzone(".dropzone", {
      dictDefaultMessage: "Arrastra o sube tus imagenes aqui",
      url: "/", // Esta URL no se usa ya que vamos a manejar la subida manualmente
      acceptedFiles: "image/*",
    });

    myDropzone.on("addedfile", (file) => {
      const namefile = file.name;
      console.log(namefile);
      // Se debe usar una promesa o async/await aquí
      (async () => {
        const { data, error } = await supabase.storage
          .from("galeria")
          .upload(namefile, file, {
            upsert: true,
          });
        console.log(data);
        console.log(error);
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
      <h3 className="py-1">Subir imagenes:</h3>
      <div className="dropzone bg-stone-100 dark:bg-slate-950"></div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">
          Suba responsablemente las imagenes
        </span>
        <span className="text-xs">Puede que tarde en reflejar los cambios</span>
      </div>
    </div>
  );
};

export default UploadGallery;
