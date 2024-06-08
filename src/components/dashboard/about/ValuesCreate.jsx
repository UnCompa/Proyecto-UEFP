import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus, FaX } from "react-icons/fa6";
import { supabase } from "../../../lib/supabase";

const ValuesCreate = ({ table }) => {
  const [openModal, setOpenModal] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleSave = async () => {
    const { data, error } = await supabase
      .from(table)
      .insert([{ label: newLabel, content: newContent, image: newImage }]);

    if (error) {
      console.error(error);
    } else {
      setOpenModal(false);
      setNewLabel("");
      setNewContent("");
      setNewImage("");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="w-full h-12 py-8 border-2 border-green-500 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors"
      >
        <span className="text-xl text-green-500">
          <FaPlusCircle />
        </span>
      </button>
      {openModal && (
        <div className="bg-black/30 h-full w-full fixed top-0 left-0 z-10 flex items-center justify-center">
          <div className="bg-zinc-200 dark:bg-zinc-900 flex flex-col h-max w-2/3 p-2">
            <h2 className="text-center text-2xl font-bold">Crear</h2>
            <article className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="">Valor:</label>
              <input
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
              />
              <label htmlFor="">Descripción:</label>
              <input
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
              <label htmlFor="">Imagen:</label>
              <input
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                type="text"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
            </div>
              <div className="flex items-center justify-center my-2">
                <img className="h-52 object-cover aspect-video bg-zinc-100 dark:bg-zinc-950 border-none flex items-center justify-center" src={newImage} alt="Imagen sobre el valor" />
              </div>
            </article>
            <div className="flex my-1 gap-2">
              <button
                className="flex-1 flex justify-center text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"
                onClick={handleSave}
              >
                <FaPlus />
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 flex justify-center text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-colors"
              >
                <FaX />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ValuesCreate;
