import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Toaster, toast } from "sonner"; // Asumiendo que 'sonner' es tu librería de notificaciones
import { supabase } from "../../../lib/supabase";

const AcademicsCreate = ({ table }) => {
  const [openModal, setOpenModal] = useState(false);
  const [createData, setCreateData] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  const handleCreate = async () => {
    try {
      console.log("Datos a crear:", createData);
      const { data, error } = await supabase.from(table).insert([
        {
          title: createData.title,
          content: createData.content,
          img: createData.img_url,
        },
      ]);
      if (error) {
        console.error("Error al crear:", error);
        toast.error("Error al crear la sección");
      } else {
        console.log("Datos creados:", data);
        toast.success("Sección creada con éxito");
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Error en la creación:", error.message);
      toast.error("Error al procesar la solicitud");
    }
  };

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <button
        onClick={() => setOpenModal(true)}
        className="w-full h-12 py-2 border-2 border-green-500 flex items-center justify-center hover:bg-green-50 transition-colors"
      >
        <span className="text-xl text-green-500">
          <FaPlus />
        </span>
      </button>

      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/30 z-10">
          <div className="bg-gray-100 dark:bg-zinc-900 flex flex-col w-2/3 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Crear</h2>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={createData.title}
              onChange={(e) =>
                setCreateData({ ...createData, title: e.target.value })
              }
              className="p-2 my-1 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
            <label htmlFor="content">Contenido:</label>
            <textarea
              id="content"
              value={createData.content}
              onChange={(e) =>
                setCreateData({ ...createData, content: e.target.value })
              }
              className="p-2 my-1 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <label htmlFor="img_url">URL de la Imagen:</label>
            <input
              type="text"
              id="img_url"
              value={createData.img_url}
              onChange={(e) =>
                setCreateData({ ...createData, img_url: e.target.value })
              }
              className="p-2 my-1 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleCreate}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Crear
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcademicsCreate;
