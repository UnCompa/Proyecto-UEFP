import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FaPen, FaTrash, FaX } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";

const ObjetivesChange = ({ table }) => {
  const [data, setData] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    const loadDataValues = async () => {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    };
    loadDataValues();
  }, [table]);

  const handleEdit = (index) => {
    setEditedIndex(index);
    setNewTitle(data[index].title);
    setNewContent(data[index].text);
  };

  const handleSave = async (index) => {
    const item = data[index];
    const { data: updatedData, error } = await supabase
      .from(table)
      .update({ title: newTitle, text: newContent })
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = { ...newData[index], title: newTitle, text: newContent };
        return newData;
      });
      setEditedIndex(null);
    }
  };

  const handleDelete = async (index) => {
    const item = data[index];
    const { error } = await supabase
      .from(table)
      .delete()
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => prevData.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            {editedIndex === index ? (
              <div className="bg-zinc-200 dark:bg-zinc-900 p-2 rounded-lg shadow shadow-red-500/20 flex flex-col">
                <h2 className="text-lg font-bold text-center">Modo edición</h2>
                <label htmlFor="">Objetivo:</label>
                <input
                  type="text"
                  className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <label htmlFor="">Descripción:</label>
                <input
                  type="text"
                  className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                />
                <div className="flex my-2 gap-2">
                  <button
                    className="flex-1 flex justify-center text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"
                    onClick={() => handleSave(index)}
                  >
                    <FaPenAlt />
                  </button>
                  <button
                    onClick={() => setEditedIndex(null)}
                    className="flex-1 flex justify-center text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <FaX />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-zinc-200 dark:bg-zinc-900 p-2 rounded-lg shadow shadow-red-500/20">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <div className="h-0.5 bg-zinc-800 my-1"></div>
                <p className="font-light">{item.text}</p>
                <div className="flex my-2 gap-2">
                  <button
                    className="flex-1 flex justify-center text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"
                    onClick={() => handleEdit(index)}
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="flex-1 flex justify-center text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ObjetivesChange;
