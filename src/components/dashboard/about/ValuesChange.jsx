import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FaCheck, FaPen, FaTrashCan, FaX } from "react-icons/fa6";

const ValuesChange = ({ table }) => {
  const [data, setData] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState("");

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
    setNewTitle(data[index].label);
    setNewContent(data[index].content);
    setNewImage(data[index].image);
  };

  const handleSave = async (index) => {
    const item = data[index];
    const { data: updatedData, error } = await supabase
      .from(table)
      .update({ label: newTitle, content: newContent, image: newImage })
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = { ...newData[index], label: newTitle, content: newContent, image: newImage };
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {data.map((item, index) => (
        <div key={item.id}>
          {editedIndex === index ? (
            <div className="bg-zinc-200 dark:bg-zinc-900 h-full rounded-lg p-2 font-Rubik flex flex-col">
              <h2 className="text-xl text-center font-bold">Modo edición</h2>
              <label className="text-sm text-zinc-800 dark:text-zinc-300" htmlFor="">
                Titulo:
              </label>
              <input
                className="font-light p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <label className="text-sm text-zinc-800 dark:text-zinc-300" htmlFor="">
                Contenido:
              </label>
              <textarea
                className="font-light p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
              <label className="text-sm text-zinc-800 dark:text-zinc-300" htmlFor="">
                Imagen:
              </label>
              <input
                className="font-light p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="text"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
              <div className="flex my-1 gap-2">
                <button
                  className="flex-1 flex justify-center text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"
                  onClick={() => handleSave(index)}
                >
                  <FaCheck />
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
            <div className="bg-zinc-200 dark:bg-zinc-900 h-full rounded-lg p-2 font-Rubik flex flex-col lg:flex-row">
              <picture className="w-full md:w-max px-2 flex items-center justify-center">
                <img
                  className="max-w-72 border-1 p-2 my-2 object-cover bg-zinc-100 dark:bg-black h-52 aspect-video"
                  src={item.image}
                  alt={item.label}
                />
              </picture>
              <hgroup className="p-2">
                <div className="flex gap-x-2">
                  <h2 className="text-2xl font-bold">{item.label}</h2>
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <FaTrashCan />
                  </button>
                </div>
                <p className="font-light">{item.content}</p>
              </hgroup>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ValuesChange;
