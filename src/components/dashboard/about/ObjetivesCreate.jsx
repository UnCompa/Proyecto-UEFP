import React, { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FaPlus, FaX } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

const ObjetivesCreate = ({ table }) => {
  const [openModal, setOpenModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleCreate = async () => {
    const { data, error } = await supabase
      .from(table)
      .insert([{ title: newTitle, text: newContent }]);

    if (error) {
      console.error(error);
    } else {
      setNewTitle("");
      setNewContent("");
      setOpenModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="w-full h-12 py-8 border-2 border-green-500 flex items-center justify-center hover:bg-zinc-900 transition-colors"
      >
        <span className="text-xl text-green-500">
          <FaPlusCircle />
        </span>
      </button>
      {openModal && (
        <div className="bg-black/30 h-full w-full fixed top-0 left-0 z-10 flex items-center justify-center">
          <div className="bg-zinc-900 flex flex-col h-max w-2/3 p-2 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-4">Crear Objetivo</h2>
            <div className="flex flex-col">
              <label className="text-sm mb-1" htmlFor="title">Objetivo:</label>
              <input
                id="title"
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg mb-2 shadow font-light"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <label className="text-sm mb-1" htmlFor="content">Descripción:</label>
              <textarea
                id="content"
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg mb-2 shadow font-light"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </div>
            <div className="flex my-2 gap-2">
              <button
                className="flex-1 flex justify-center text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"
                onClick={handleCreate}
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

export default ObjetivesCreate;
