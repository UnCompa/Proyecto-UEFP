import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus, FaX } from "react-icons/fa6";
import { supabase } from "../../../lib/supabase";

const StaffCreate = ({ table }) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [phrase, setPhase] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleSave = async () => {
    const { data, error } = await supabase
      .from(table)
      .insert([
        {
          name: name,
          profession: profession,
          phrase: phrase,
          image_link: imageLink,
        }
      ]).select('*')
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
        className="w-full my-2 h-12 py-8 border-2 border-green-600 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors"
      >
        <span className="text-xl text-green-500">
          <FaPlusCircle />
        </span>
      </button>
      {openModal && (
        <div className="bg-black/30 h-full w-full fixed top-0 left-0 z-10 flex items-center justify-center">
          <div className="bg-zinc-200 dark:bg-zinc-900 flex flex-col h-max w-2/3 p-2 rounded">
            <h2 className="text-center font-bold text-xl">Crear</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 p-2">
              <div className="flex flex-col p-2">
                <label htmlFor="">Nombre:</label>
                <input
                  className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="">Profesion:</label>
                <input
                  className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                  onChange={(e) => setProfession(e.target.value)}
                  type="text"
                />
                <label htmlFor="">Frase:</label>
                <input
                  className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                  onChange={(e) => setPhase(e.target.value)}
                  type="text"
                />
                <label htmlFor="">Imagen:</label>
                <input
                  className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                  onChange={(e) => setImageLink(e.target.value)}
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center my-2">
                <img
                  className="h-52 object-cover aspect-video bg-zinc-50 dark:bg-zinc-950 border-none flex items-center justify-center"
                  src={imageLink}
                  alt="Imagen sobre el docente"
                />
              </div>
            </div>
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

export default StaffCreate;
