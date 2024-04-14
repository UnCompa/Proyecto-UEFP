import { useEffect } from "react";
import FormTest from "./FormTest";
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
      <h1 className="font-bold text-4xl">👋 Bienvenido,<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500"> {email}</span></h1>
      <p className="text-xl py-2">Estamos felices de verte aquí</p>
      <main className="bg-zinc-900 my-4 rounded">
        <section className="grid grid-cols-2 py-4 place-content-center">
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-5xl font-bold py-4">Empieza a crear y editar nuestra pagina</h2>
            <p className="text-lg">Aqui podras tener libertade de cambiar y subir contenido a la plataforma para mantenerla en funcionamiento y actualizada</p>
          </div>
          <div className="flex items-center justify-center">
            <img className="h-96" src="/public/svg/calendar-55.svg" alt="" />
          </div>
        </section>
        <section className="grid grid-cols-2 py-4 place-content-center">
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-5xl font-bold py-4">Empieza a crear y editar nuestra pagina</h2>
            <p className="text-lg">Aqui podras tener libertade de cambiar y subir contenido a la plataforma para mantenerla en funcionamiento y actualizada</p>
          </div>
          <div className="flex items-center justify-center">
            <img className="h-96" src="/public/svg/calendar-55.svg" alt="" />
          </div>
        </section>
        <section className="grid grid-cols-2 py-4 place-content-center">
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-5xl font-bold py-4">Empieza a crear y editar nuestra pagina</h2>
            <p className="text-lg">Aqui podras tener libertade de cambiar y subir contenido a la plataforma para mantenerla en funcionamiento y actualizada</p>
          </div>
          <div className="flex items-center justify-center">
            <img className="h-96" src="/public/svg/calendar-55.svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
