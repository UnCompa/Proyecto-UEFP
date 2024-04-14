import { useEffect } from "react";
import FormTest from "../../components/sections/FormTest";
import { supabase } from "../../lib/supabase";

export default function MainDashboard({email}) {
  useEffect(()=>{
    const fetchData = async () =>{
      const result = await supabase.from('pages').select()
      console.log(result);
    }
    fetchData()
  },[])
  return (
    <>
      <h1 className="font-bold text-3xl">👋 Bienvenido, {email}</h1>
      <p>Estamos felices de verte aquí</p>
      <div>
        <FormTest client:load />
      </div>
    </>
  );
}
