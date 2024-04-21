import { supabase } from "../../lib/supabase";

export default function SignGoogle() {
  const handleGoogle = async () => {
    const result = await supabase.auth.signInWithOAuth({
      provider: "google"
    })
    console.log(result);
  }
  return (
    <button onClick={handleGoogle} className="bg-zinc-100 text-black py-2 rounded">Google</button>
  );
}
