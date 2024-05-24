import ClipboardJS from "clipboard";
import { toast } from "sonner";
document.addEventListener("astro:page-load", () => {
  console.log("Hola");
  const link = document.getElementById("clipboard-text");
  link.addEventListener("click", () => {
    const clipboard = new ClipboardJS("#clipboard-text");
    clipboard.on("success", function (e) {
      console.log("Hola");
      toast.success("Enlace copiado correctamente");
      e.clearSelection();
    });

    clipboard.on("error", function () {
      toast.error("Error al copiar el enlace");
    });
  });
});
