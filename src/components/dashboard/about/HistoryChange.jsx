import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import dayjs from "dayjs";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
const HistoryChange = ({ table, lang = "es" }) => {
  const [data, setData] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newimg_url, setNewImg_url] = useState("");
  const [newimg_alt, setNewImg_alt] = useState("");

  useEffect(() => {
    const loadData = async () => {
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
    loadData();
  }, []);

  const handleEdit = (index) => {
    setEditedIndex(index);
    setNewTitle(data[index].title);
    setNewContent(data[index].content);
    setNewImg_url(data[index].img_url);
    setNewImg_alt(data[index].img_alt);
  };

  const handleSave = async (index) => {
    const item = data[index];
    const { data: updatedData, error } = await supabase
      .from("historyes")
      .update({ title: newTitle, content: newContent })
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = {
          ...newData[index],
          title: newTitle,
          content: newContent,
        };
        return newData;
      });
      setEditedIndex(null);
    }
  };
  const handleDelete = async (index) => {
    const item = data[index];
    const { error } = await supabase
      .from("historyes")
      .delete()
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => prevData.filter((_, i) => i !== index));
    }
  };
  return (
    <>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="h-max p-4 bg-zinc-200 dark:bg-zinc-900 rounded-lg font-base"
        >
          {editedIndex === index ? (
            <div className="flex flex-col">
              <label htmlFor="">
              {lang === "es" ? "Titulo:" : "Title:"}
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
              />
              <label htmlFor="">
              {lang === "es" ? "Contenido:" : "Content:"}
              </label>
              <textarea
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
              />
              <label htmlFor="">
              {lang === "es" ? "Imagen:" : "Image:"}
              </label>
              <input
                type="text"
                value={newimg_url}
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                onChange={(e) => setNewImg_url(e.target.value)}
              />
              <label htmlFor="">
              {lang === "es" ? "Texto alternativo:" : "Alternative text:"}
              </label>
              <input
                type="text"
                value={newimg_alt}
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                onChange={(e) => setNewImg_alt(e.target.value)}
              />
              <div className="flex gap-2 my-2">
                <button
                  className="flex-1 px-2 py-1 rounded bg-green-700"
                  onClick={() => handleSave(index)}
                >
                  {lang === "es" ? "Guardar" : "Save"}
                </button>
                <button
                  className="flex-1 px-2 py-1 rounded bg-red-700"
                  onClick={() => setEditedIndex(null)}
                >
                  {lang === "es" ? "Cancelar" : "Cancel"}
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="text-sm font-zinc-300 flex gap-2 my-1">
                  <span className="bg-zinc-500 text-black px-2 rounded-full">
                    {item.id}
                  </span>
                  <span>{dayjs(item.created_at).format("DD/MM/YYYY")}</span>
                  <button
                    className="bg-green-600 hover:bg-green-700 active:bg-green-800 px-2 py-1 rounded transition-colors"
                    onClick={() => handleEdit(index)}
                  >
                    <FaPenAlt/>
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-2 py-1 rounded transition-colors"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrashAlt/>
                  </button>
                </div>
                <hgroup className="h-max">
                  <h2 className="text-2xl font-bold">
                    <span className="font-extrabold">
                      {lang === "es" ? "Titulo:" : "Title:"}
                      </span> {item.title}
                  </h2>
                  <p className="font-light">
                    <span className="font-bold">
                    {lang === "es" ? "Contenido:" : "Content:"}
                      </span> {item.content}
                  </p>
                </hgroup>
              </div>
              <div className="p-4 h-full flex items-center justify-center">
                <img
                  className="h-full max-h-72 border-2 p-2"
                  src={item.img_url}
                  alt={item.img_alt}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default HistoryChange;
