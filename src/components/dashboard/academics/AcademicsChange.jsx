import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FaPen, FaTrash, FaX } from "react-icons/fa6";

const AcademicsChange = ({ table, lang = "es" }) => {
  const [data, setData] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  useEffect(() => {
    const loadLevels = async () => {
      const { data } = await supabase
        .from(table)
        .select("*")
        .order("id", { ascending: true });
      setData(data);
    };
    loadLevels();
  }, []);
  const handleEdit = (index) => {
    setEditedIndex(index);
    setTitle(data[index].title);
    setContent(data[index].content);
    setImage(data[index].img);
  };

  const handleSave = async (index) => {
    const item = data[index];
    const { data: updatedData, error } = await supabase
      .from(table)
      .update({
        title: title,
        content: content,
        img: image,
      })
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = {
          ...newData[index],
          title: title,
          content: content,
          img: image,
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
    <div className="flex flex-col gap-2">
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            {editedIndex === index ? (
              <article className="dark:bg-zinc-950 rounded grid grid-cols-1 md:grid-cols-2">
                <div class="p-4 flex flex-col items-start justify-start bg-zinc-200 dark:bg-zinc-950 rounded">
                  <h2 className="text-2xl font-bold">
                    {lang === "es" ? "Modo Edicion" : "Edit Mode"}
                  </h2>
                  <div
                    class={`bg-gradient-to-l from-red-500 to-orange-500 h-1 rounded-full w-1/2 my-2`}
                  ></div>
                  <label className="text-zinc-300" htmlFor="">
                  {lang === "es" ? "Titulo" : "Title"}
                  </label>
                  <input
                    className="bg-zinc-800 rounded my-1 outline-none focus:ring-2 focus:ring-orange-500 p-1 w-full"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <label className="text-zinc-300" htmlFor="">
                  {lang === "es" ? "Descripcion" : "Description"}
                  </label>
                  <textarea
                    className="bg-zinc-800 rounded my-1 outline-none focus:ring-2 focus:ring-orange-500 p-1 w-full"
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                  />
                  <label className="text-zinc-300" htmlFor="">
                  {lang === "es" ? "Imagen" : "Image"}
                  </label>
                  <input
                    className="bg-zinc-800 rounded my-1 outline-none focus:ring-2 focus:ring-orange-500 p-1 w-full"
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                  <div className="flex w-full my-2 gap-2">
                    <button
                      className="flex-1 flex justify-center text-orange-500 border border-orange-500 px-2 py-1 rounded hover:bg-orange-500 hover:text-white transition-colors"
                      onClick={() => handleSave(index)}
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => setEditedIndex(null)}
                      className="flex-1 flex justify-center text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <FaX />
                    </button>
                  </div>
                </div>
                <picture className="p-4 h-full w-full flex items-center justify-center">
                  <img
                    src={image}
                    alt="Imagen para academicos"
                    className="grid place-content-center aspect-video h-72 w-full md:w-2/3 object-cover border-2 p-1 border-black dark:border-white shadow-xl bg-zinc-300 dark:bg-zinc-900 shadow-zinc-900/20 dark:shadow-zinc-100/20"
                  />
                </picture>
              </article>
            ) : (
              <article className="dark:bg-zinc-950 rounded grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div class="p-4 flex flex-col items-start justify-start bg-zinc-200 dark:bg-zinc-950 rounded">
                  <h2 class="px-4 title text-3xl font-Kanit font-extrabold">
                    {item.title}
                  </h2>

                  <div
                    class={`bg-gradient-to-l from-red-500 to-orange-500 mx-4 h-1 rounded-full w-1/2 my-2`}
                  ></div>
                  <p class="text font-Kanit text-base md:text-lg px-4 font-light text-zinc-800 dark:text-zinc-200">
                    {item.content}
                  </p>
                  <div className="flex gap-2 p-4 items-center">
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
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <picture className="p-4 h-full w-full flex items-center justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="aspect-video h-72 w-full md:w-2/3 object-cover border-2 p-1 border-black dark:border-white shadow-xl bg-zinc-300 dark:bg-zinc-900 shadow-zinc-900/20 dark:shadow-zinc-100/20"
                  />
                </picture>
              </article>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AcademicsChange;
