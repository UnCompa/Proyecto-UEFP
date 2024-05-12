import { FaGoogle } from "react-icons/fa6";
import { supabase } from "../../lib/supabase";

export default function SignGoogle() {
  const handleGoogle = async () => {
    const result = await supabase.auth.signInWithOAuth({
      provider: "google"
    })
    console.log(result);
  }
  return (
    <button onClick={handleGoogle} name="provider" className="bg-zinc-100 text-black py-2 rounded-full flex items-center justify-center gap-x-2">
      <FaGoogle className="text-zinc-500 font-bold text-xl"/>
      <span className="font-Rubik font-bold">Inicia sesión con Google</span>
    </button>
  );
}
