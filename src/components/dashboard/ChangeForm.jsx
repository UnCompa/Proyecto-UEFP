import { useEffect, useState } from "react";
import { actualizarTexto, recuperarTexto } from "../../utils/changeData";
import Loader from "../Ui/Loader";

export default function ChangeForm(props) {
  const [texto1, settexto1] = useState("");
  const [newtexto1, setNewTexto1] = useState("");
  const [loading,setLoading] = useState(false);
  const { propiedad, lang, seccion, title } = props;
  const fetchData = async () => {
    const texto = await recuperarTexto(propiedad, lang, seccion);
    console.log(texto);
    settexto1(texto);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async () => {
    const newText = {
      texto: newtexto1,
    };
    setLoading(true)
    const data = await actualizarTexto(propiedad, lang, seccion, newText);
    setLoading(false)
    window.location.reload()
  };
  return (
    <article class="container mx-auto px-8">
      <h2 class="text-2xl underline decoration-2 decoration-green-500">
        {title}
      </h2>
      <div class="flex flex-col md:flex-row md:items-end md:justify-start gap-x-4 py-4">
        <div class="flex flex-col flex-1">
          <label for="">Actual:</label>
          <textarea
            disabled
            value={texto1}
            type="text"
            class="bg-zinc-200 dark:bg-zinc-900 my-4 p-2 border-2 border-green-500 focus:outline-none focus:border-emerald-300 disabled:text-zinc-500 disabled:bg-zinc-300 dark:disabled:bg-zinc-950 [scrollbar-color:rgb(34_197_94)_rgb(212_212_216)] dark:[scrollbar-color:rgb(34_197_94)_rgb(9_9_11)]"
          />
        </div>
        <div class="flex flex-col flex-1">
          <label for="">Modificado:</label>
          <div class="flex items-center gap-x-4 w-full">
            <textarea
              id="InputHomeChange"
              type="text"
              class="bg-zinc-200 dark:bg-zinc-900 w-full my-4 p-2 border-2 border-green-500 focus:outline-none focus:border-emerald-300 [scrollbar-color:rgb(34_197_94)_rgb(228_228_231)] dark:[scrollbar-color:rgb(34_197_94)_rgb(24_24_27)]"
              onChange={(e) => setNewTexto1(e.target.value)}
            />
          </div>
        </div>
        <div className="flex h-full items-end justify-end py-5">
          <button
            id="handleSubmit"
            class="bg-green-500 hover:bg-green-600 active:bg-green-700 w-full md:min-w-24 h-max px-4 py-2 shadow-xl rounded"
            onClick={handleSubmit}
          >
            {
              loading ? (
                <Loader/>
              ) : (
                <p>Cambiar</p>
              )
            }
          </button>
        </div>
      </div>
    </article>
  );
}