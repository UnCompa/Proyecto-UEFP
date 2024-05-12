import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ChangeForm() {
  const [texto1, settexto1] = useState("")
  const [newtexto1, setNewTexto1] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("inicio")
        .select("id")
        .eq("identificador", "hero-frase");
      const identificador = data[0];
      const { data: value, error: valueError } = await supabase
        .from("inicioes")
        .select("texto")
        .eq("id", identificador.id);
      const texto = value[0].texto;
      settexto1(texto)
    };
    fetchData();
  }, []);
  const handleSubmit =  async () => {
    const newText = {
      texto: newtexto1
    }
    const {data: id} = await supabase.from("inicio").select("id").eq("identificador", "hero-frase");
    const identificador = id[0];
    console.log(identificador);
    const {data} = await supabase.from("inicioes").update(newText).eq("id",identificador.id).select()
    console.log(data);
  }
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
            value={texto1}
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
              onChange={e => setNewTexto1(e.target.value)}
            />
            <button
              id="handleSubmit"
              class="bg-green-500 h-max px-4 py-2 rounded-lg shadow-xl"
              onClick={handleSubmit}
            >
              Cambiar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
