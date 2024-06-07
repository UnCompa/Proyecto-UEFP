import Dropzone from "dropzone";
import { supabase } from "../lib/supabase";

let myDropzone = new Dropzone(".dropzone", {
  dictDefaultMessage: "Arrastra o sube tus imagenes aqui",
  url: "/",
  acceptedFiles: "image/*",
});
myDropzone.on("success", async (file) => {
  const namefile = file.name
  console.log(namefile);
  const { data, error } = await supabase.storage
    .from("galeria")
    .upload(namefile, file, {
      upsert: true,
    });
    console.log(data);
    console.log(error);
    if (data) {
      window.location.reload()
    }
});
