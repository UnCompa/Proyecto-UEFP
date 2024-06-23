import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import dayjs from "dayjs";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
const OtherSectionChange = ({ table, lang = "es" }) => {
  const [data, setData] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newto, setNewTo] = useState("");
  const [newIconName, setIconName] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .order("id", { ascending: true });
      data;
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
    setNewTo(data[index].to);
    setIconName(data[index].iconName);
  };

  const handleSave = async (index) => {
    const item = data[index];
    const { data: updatedData, error } = await supabase
      .from(table)
      .update({ title: newTitle, content: newContent, to: newto, iconName: newIconName })
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
          iconName: newIconName,
        };
        return newData;
      });
      setEditedIndex(null);
    }
  };
  const handleDelete = async (index) => {
    const item = data[index];
    const { error } = await supabase.from(table).delete().eq("id", item.id);

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
              <label htmlFor="">{lang === "es" ? "Titulo:" : "Title:"}</label>
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
                {lang === "es" ? "Va hacia:" : "Redirect:"}
              </label>
              <input
                type="text"
                value={newto}
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                onChange={(e) => setNewTo(e.target.value)}
              />
              <label htmlFor="">{lang === "es" ? "Icono:" : "Icon:"}</label>
              <input
                type="text"
                value={newIconName}
                className="p-1 outline-none focus:ring-2 focus:ring-red-500 rounded-lg my-1 shadow font-light"
                onChange={(e) => setIconName(e.target.value)}
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
                  <FaPenAlt />
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-2 py-1 rounded transition-colors"
                  onClick={() => handleDelete(index)}
                >
                  <FaTrashAlt />
                </button>
              </div>
              <hgroup className="h-max">
                <span className="font-extrabold">
                  {lang === "es" ? "Va hacia:" : "Redirect:"}
                </span>{" "}
                {`/${lang}/${item.to}`}
                <p className="font-light">
                  <span className="font-bold">
                    {lang === "es" ? "Icono:" : "Icon:"}
                  </span>{" "}
                  {item.iconName ? item.iconName : (lang === "es") ? "No disponible" : "Not avalible"}
                </p>
                <h2 className="text-2xl font-bold">
                  <span className="font-extrabold">
                    {lang === "es" ? "Titulo:" : "Title:"}
                  </span>{" "}
                  {item.title}
                </h2>
                <p className="font-light">
                  <span className="font-bold">
                    {lang === "es" ? "Contenido:" : "Content:"}
                  </span>{" "}
                  {item.content}
                </p>
              </hgroup>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default OtherSectionChange;
