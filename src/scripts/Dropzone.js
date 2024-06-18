import Dropzone from "dropzone";
import { supabase } from "../lib/supabase";
import { getLangFromUrl } from "../i18n/utils";
const lang = getLangFromUrl(window.location)
let myDropzone = new Dropzone(".dropzone", {
  dictDefaultMessage: lang === "es" ? "Arrastra o sube tus archivos aqui" : "Drag or upload your files here",
  url: "/",
  acceptedFiles: "video/*",
  maxFiles: 1,
});
myDropzone.on("success", async (file) => {
  const { data, error } = await supabase.storage
    .from("recursos")
    .upload(`videos/inicial`, file, {
      upsert: true,
    });
    if (data) {
      window.location.reload()
    }
});
