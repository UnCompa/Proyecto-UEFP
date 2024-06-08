import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FaPen, FaTrash, FaX } from "react-icons/fa6";

const StaffChange = ({ table }) => {
  const [data, setData] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editProfession, setEditProfession] = useState("");
  const [editPhrase, setEditPhrase] = useState("");
  const [editImageLink, setEditImageLink] = useState("");
  useEffect(() => {
    const loadDataValues = async () => {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setData(data);
      }
    };
    loadDataValues();
  }, [table]);

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditName(data[index].name);
    setEditProfession(data[index].profession);
    setEditPhrase(data[index].phrase);
    setEditImageLink(data[index].image_link);
  };
  const handleSave = async (index) => {
    const item = data[index];
    const { data: updatedData, error } = await supabase
      .from(table)
      .update({
        name: editName,
        profession: editProfession,
        phrase: editPhrase,
        image_link: editImageLink,
      })
      .eq("id", item.id);

    if (error) {
      console.error(error);
    } else {
      setData((prevData) => {
        const newData = [...prevData];
        newData[index] = {
          ...newData[index],
          name: editName,
          profession: editProfession,
          phrase: editPhrase,
          image_link: editImageLink,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            {editedIndex === index ? (
              <div className="h-full w-full col-span-2 bg-zinc-200 dark:bg-zinc-900 p-2 rounded">
                <h2 className="text-lg font-bold text-center">Editar</h2>
                <div>
                  <label className="text-zinc-800 dark:text-zinc-100" htmlFor="">
                    Nombre:
                  </label>
                  <input
                    className="p-1 outline-none focus:ring-2 focus:ring-red-500 font-light rounded"
                    type="text"
                    onChange={(e)=> setEditName(e.target.value)}
                    value={editName}
                  />
                  <label className="text-zinc-800 dark:text-zinc-100" htmlFor="">
                    Profesion:
                  </label>
                  <input
                    className="p-1 outline-none focus:ring-2 focus:ring-red-500 font-light rounded"
                    type="text"
                    onChange={(e)=> setEditProfession(e.target.value)}
                    value={editProfession}
                  />
                  <label className="text-zinc-800 dark:text-zinc-100" htmlFor="">
                    Frase:
                  </label>
                  <input
                    className="p-1 outline-none focus:ring-2 focus:ring-red-500 font-light rounded"
                    type="text"
                    onChange={(e)=> setEditPhrase(e.target.value)}
                    value={editPhrase}
                  />
                  <label className="text-zinc-800 dark:text-zinc-100" htmlFor="">
                    Imagen:
                  </label>
                  <input
                    className="p-1 outline-none focus:ring-2 focus:ring-red-500 font-light rounded"
                    type="text"
                    onChange={(e)=> setEditImageLink(e.target.value)}
                    value={editImageLink}
                  />
                  <div className="flex my-2 gap-2">
                    <button
                      className="flex-1 flex justify-center text-emerald-500 border border-emerald-500 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"
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
              </div>
            ) : (
              <div className="bg-zinc-200 dark:bg-zinc-900 p-2 h-full">
                <picture className="flex justify-center">
                  <img
                    className="w-32 h-32 object-cover rounded-full border-2 p-1"
                    src={item.image_link}
                    alt=""
                  />
                </picture>
                <div className="my-2 text-center">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span>{item.profession}</span>
                  <p className="text-zinc-800 dark:text-zinc-300 font-light">{item.phrase}</p>
                </div>
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

export default StaffChange;
