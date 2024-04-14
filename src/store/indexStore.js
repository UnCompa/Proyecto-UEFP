import { create } from "zustand";
import { supabase } from "../lib/supabase";

const indexStore = create((set) => ({
  saludo: "Hola",
  fetchAllIndex: async () => {
    try {
      const { data, error } = await supabase.from("index").select();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error fetching all index:", error.message);
      return [];
    }
  },
}));
export default indexStore;