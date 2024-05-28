import Dropzone from "dropzone";
import { supabase } from "../lib/supabase";
let myDropzone = new Dropzone(".dropzone", {
  dictDefaultMessage: "Arrastra o sube tus archivos aqui",
  url: "/",
  acceptedFiles: "video/*",
  maxFiles: 1,
});
myDropzone.on("success", async (file) => {
  console.log(file);
  const { data, error } = await supabase.storage
    .from("recursos")
    .upload(`videos/inicial`, file, {
      upsert: true,
    });
    if (data) {
      window.location.reload()
    }
  console.log(data);
  console.log(error);
});
