import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function ChangeForm() {
  useEffect(() => {
    const fetchData = async () => {
      const { data: traducciones } = await supabase
        .from("traduccionesEs")
        .select("translates")
        .eq("type", "inicio");

      let translates = null;
      let heroFrase;
      if (traducciones && traducciones.length > 0) {
        translates = traducciones[0];
        heroFrase = translates.translates["hero-frase"];
      } else {
        console.log("No se encontraron traducciones para el tipo 'inicio'.");
      }
    };
    fetchData();
  }, []);
  return (
    <article class="container mx-auto">
      <h2 class="text-2xl underline decoration-2 decoration-green-500">
        Modifica el lema
      </h2>
      <div class="flex items-center justify-start gap-x-4 py-4">
        <div class="flex flex-col">
          <label for="">Actual:</label>
          <input
            disabled
            value={translates !== null ? heroFrase : ""}
            type="text"
            class="bg-zinc-900 my-4 p-2 rounded-2xl border-2 border-green-500 focus:outline-none focus:border-emerald-300 disabled:text-zinc-500 disabled:bg-zinc-950"
          />
        </div>
        <div class="flex flex-col">
          <label for="">Modificado:</label>
          <div class="flex items-center gap-x-4">
            <input
              id="InputHomeChange"
              type="text"
              class="bg-zinc-900 my-4 p-2 rounded-2xl border-2 border-green-500 focus:outline-none focus:border-emerald-300"
            />
            <button
              id="handleSubmit"
              class="bg-green-500 h-max px-4 py-2 rounded-lg shadow-xl"
            >
              Cambiar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
