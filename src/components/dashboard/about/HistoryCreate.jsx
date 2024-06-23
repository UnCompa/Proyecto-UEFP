import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { supabase } from "../../../lib/supabase";
import { Toaster, toast } from "sonner";

const HistoryCreate = () => {
  const [openModal, setOpenModal] = useState(false);
  const [createdata, setCreateData] = useState({
    title: "",
    content: "",
    img_url: "",
    img_alt: "",
  });
  const handleCreate = async () => {
    const { data, error } = await supabase
      .from("historyes")
      .insert({
        title: createdata.title,
        content: createdata.content,
        img_url: createdata.img_url,
        img_alt: createdata.img_alt,
      })
      .select("*");
    if (data) {
      toast.success("Seccion creada con exito");
      setOpenModal(false);
    }
  };

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <button
        onClick={() => setOpenModal(true)}
        className="w-full h-12 py-8 border-2 border-green-500 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors"
      >
        <span className="text-xl text-green-500">
          <FaPlus />
        </span>
      </button>
      {openModal ? (
        <div class="bg-black/30 h-full w-full fixed top-0 left-0 z-10 flex items-center justify-center">
          <div class="bg-zinc-200 dark:bg-zinc-900 flex flex-col h-max w-2/3 p-2">
            <h2 className="text-center text-2xl font-bold">Crear</h2>
            <label htmlFor="">Titulo:</label>
            <input
              type="text"
              className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
              onChange={(e) =>
                setCreateData((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
            />
            <label htmlFor="">Contenido:</label>
            <textarea
              name=""
              id=""
              className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
              onChange={(e) =>
                setCreateData((prevData) => ({
                  ...prevData,
                  content: e.target.value,
                }))
              }
            ></textarea>
            <label htmlFor="">Imagen (Link):</label>
            <input
              type="text"
              className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
              onChange={(e) =>
                setCreateData((prevData) => ({
                  ...prevData,
                  img_url: e.target.value,
                }))
              }
            />
            <label htmlFor="">Texto Alternativo</label>
            <input
              type="text"
              className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
              onChange={(e) =>
                setCreateData((prevData) => ({
                  ...prevData,
                  img_alt: e.target.value,
                }))
              }
            />
            <div className="flex gap-2 my-2">
              <button
                onClick={() => handleCreate()}
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 px-2 py-1 rounded transition-colors"
              >
                Crear
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 px-2 py-1 rounded transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HistoryCreate;
