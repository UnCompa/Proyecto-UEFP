import React from "react";
import { supabase } from "../../lib/supabase";

export default function InputUpdateSettings({idUser}) {
  const handleSubmit = async () => {
    const {data} = await supabase.from("profiles").select("").eq("id",idUser)
  }
  return (
    <div class="flex gap-4">
      <input
        type="text"
        class="p-2 rounded bg-zinc-900 outline-none shadow focus:ring focus:ring-zinc-500"
      />
      <button id="username" class="bg-slate-900 px-4 py-1 rounded">
        Cambiar
      </button>
    </div>
  );
}
