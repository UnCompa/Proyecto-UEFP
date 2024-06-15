import { useEffect, useState } from "react";
import { actualizarTexto, recuperarTexto } from "../../utils/changeData";
import Loader from "../Ui/Loader";
/**
 *
 * @param {string} props.propiedad el identificador
 * @param {string} props.lang el lenguaje que se va usar
 * @param {string} props.title titulo para la seccion
 * @param {string} props.seccion que coleccion se desea acceder
 */
export default function ChangeForm(props) {
  const [texto, setTexto] = useState();
  const [newtexto, setNewTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const { propiedad, lang, seccion, title } = props;
  useEffect(() => {
    const fetchData = async () => {
      const textoDB = await recuperarTexto(propiedad, lang, seccion);
      setTexto(textoDB);
    };
    fetchData();
  }, []);
  
  const handleSubmit = async () => {
    const newText = {
      texto: newtexto,
    };
    setLoading(true);
    const data = await actualizarTexto(propiedad, lang, seccion, newText);
    setLoading(false)
    window.location.reload()
  };
  return (
    <article class="container mx-auto px-8 bg-zinc-100 dark:bg-stone-900 grid grid-rows-2 rounded-md shadow-lg h-full">
      <div className="h-full">
        <h2 class="text-2xl py-4 text-center font-bold">{title}</h2>
        <div class="flex flex-col flex-1">
          <label for="">Actual:</label>
          <textarea
            disabled
            value={(texto) ? texto : "Loading..."}
            type="text"
            class="bg-zinc-200 text-sm dark:bg-zinc-900 my-4 px-2 py-4 border-l-2 border-green-500 focus:outline-none focus:border-emerald-300 disabled:text-zinc-500 disabled:bg-zinc-300 dark:disabled:bg-zinc-950 [scrollbar-color:rgb(34_197_94)_rgb(212_212_216)] dark:[scrollbar-color:rgb(34_197_94)_rgb(9_9_11)]"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:items-center md:justify-center gap-x-4 h-full">
        <div class="flex flex-col flex-1">
          <label for="">Modificar:</label>
          <div class="flex items-center gap-x-4 w-full">
            <textarea
              id="InputHomeChange"
              type="text"
              class="[resize:none] bg-zinc-200 dark:bg-stone-950 rounded-xl w-full my-4 px-4 py-2 text-sm focus:outline-none focus:bg-stone-50 dark:focus:bg-stone-800 [scrollbar-color:rgb(34_197_94)_rgb(228_228_231)] dark:[scrollbar-color:rgb(34_197_94)_rgb(24_24_27)] transition-all"
              onChange={(e) => setNewTexto(e.target.value)}
            />
          </div>
        </div>
        <div className="flex h-full items-center justify-end">
          <button
            id="handleSubmit"
            class="bg-green-500 hover:bg-green-600 active:bg-green-700 w-full h-max px-4 py-2 shadow-xl rounded"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : <p>Cambiar</p>}
          </button>
        </div>
      </div>
    </article>
  );
}
