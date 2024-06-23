import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import Loader from "../Ui/Loader";

export default function InputUpdateSettings({ idUser, type }) {
  const [newData, setNewData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({ [type]: newData }) // Pasar el type y newData como un objeto
        .eq("id", idUser);

      if (error) throw error;

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      window.location.reload()
    }
  };

  return (
    <div className="flex gap-4">
      <input
        onChange={(e) => setNewData(e.target.value)}
        type="text"
        className="p-2 rounded bg-zinc-950 outline-none shadow focus:ring focus:ring-zinc-500"
      />
      <button
        onClick={handleSubmit}
        className={`bg-red-500 px-4 py-1 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
        disabled={loading}
      >
        {loading ? <Loader/> : "Cambiar"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
