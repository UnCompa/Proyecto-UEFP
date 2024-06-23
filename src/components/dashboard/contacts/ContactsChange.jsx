import { useEffect, useState } from "react";
import { actualizarTexto, recuperarTexto } from "../../../utils/changeData";
import Loader from "../../Ui/Loader";
/**
 *
 * @param {string} props.propiedad el identificador
 * @param {string} props.lang el lenguaje que se va usar
 * @param {string} props.title titulo para la seccion
 * @param {string} props.seccion que coleccion se desea acceder
 */
const ContactsChange = (props) => {
  const [texto, setTexto] = useState("");
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
    setLoading(false);
    window.location.reload();
  };
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 p-4 rounded">
      <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
      <div class="h-1 rounded bg-gradient-to-r from-red-500 to-pink-500 my-1"></div>
      <div className="flex flex-col gap-1">
        <span>{lang === "es" ? "Actual" : "Current"}</span>
        <input
          className="bg-zinc-200 disabled:bg-zinc-300 dark:bg-zinc-950 p-1.5 rounded disabled:text-zinc-400 dark:disabled:bg-zinc-950/50"
          disabled
          value={texto ? texto : "Loading..."}
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>{lang === "es" ? "Modificar" : "Modify"}</span>
        <input
          onChange={(e) => setNewTexto(e.target.value)}
          className="bg-zinc-50 dark:bg-zinc-950 p-1.5 rounded outline-none focus:ring-2 focus:ring-pink-500 selection:bg-pink-500"
          type="text"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full py-1 my-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 shadow-lg hover:shadow-pink-500/30 transition-all"
      >
        {lang === "es" ? (
          loading ? (
            <Loader width="w-4" height="h-4" />
          ) : (
            <p>Actualizar</p>
          )
        ) : loading ? (
          <Loader width="w-4" height="h-4" />
        ) : (
          <p>Update</p>
        )}
      </button>
    </div>
  );
};

export default ContactsChange;
