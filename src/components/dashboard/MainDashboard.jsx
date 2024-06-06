import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { FaAddressBook, FaHome, FaUsers } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { getLangFromUrl } from "../../i18n/utils";

export default function MainDashboard({ email, url, user }) {
  const lang = getLangFromUrl(url);
  const [roles, setRoles] = useState(["admin"]);
  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id);
      const roles = (userData && userData[0]?.roles) || [];
      setRoles(roles);
    };
    fetchData();
  }, [roles]);
  return (
    <>
      <h1 className="font-bold text-2xl md:text-4xl">
        👋 Bienvenido,
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
          {" "}
          {email}
        </span>
      </h1>
      <p className="text-base md:text-xl py-2">Estamos felices de verte aquí</p>
      <main className="my-4 rounded flex flex-col gap-y-4">
        {roles.includes("admin") ? (
          <section className="bg-zinc-200 dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-2 py-4 place-content-center rounded">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold py-4">
                Empieza a crear y editar la web
              </h2>
              <p className="text-lg text-black dark:text-zinc-300">
                Aqui podras tener libertade de cambiar y subir contenido a la
                plataforma para mantenerla en funcionamiento y actualizada
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-96" src="/svg/calendar-55.svg" alt="" />
            </div>
          </section>
        ) : (
          <section className="bg-zinc-200 dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-2 py-4 place-content-center rounded">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold py-4">
                Explora nuestro dashboard, interactua con el contenido
              </h2>
              <p className="text-lg text-black dark:text-zinc-300">
                Visita las secciones permitidas e interactua con cosas relacionadas con la institucion
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img className="h-96" src="/svg/calendar-55.svg" alt="" />
            </div>
          </section>
        )}
        <section className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article className="bg-zinc-200 dark:bg-zinc-900 rounded hover:ring-1 hover:ring-green-500 h-full w-full p-4 grid grid-cols-2 transition-all">
            <div className="h-full w-full">
              <h3 className="text-center font-bold text-2xl md:text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-300">
                Inicio
              </h3>
              <p className="font-light dark:text-zinc-300 my-2">
                Edita la pagina principal ya sea el lema, la mision y vision de
                la institucion, entre otras cosas
              </p>
              <a href={`/${lang}/dashboard/homepage`}>
                <button className="my-2 px-4 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 border border-green-500 transition-all">
                  Ver Mas
                </button>
              </a>
            </div>
            <div className="h-full w-full grid place-content-center">
              {/* <img src="" alt="Ilustracion del inicio" /> */}
              <FaHome className="text-9xl fill-green-500 drop-shadow-2xl" />
            </div>
          </article>
          <article className="bg-zinc-200 dark:bg-zinc-900 rounded hover:ring-1 hover:ring-purple-500 h-full w-full p-4 grid grid-cols-2 transition-all">
            <div className="h-full w-full">
              <h3 className="text-center font-bold text-2xl md:text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-tl from-purple-700 to-purple-300">
                Sobre Nosotros
              </h3>
              <p className="font-light dark:text-zinc-300 my-2">
                Todo sobre la historia de la institucion, agrega y modifica esta
                seccion a traves de paneles de ayuda
              </p>
              <a href="">
                <button className="my-2 px-4 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 border border-purple-500 transition-all">
                  Ver Mas
                </button>
              </a>
            </div>
            <div className="h-full w-full grid place-content-center">
              <FaUsers className="text-9xl fill-purple-500 drop-shadow-2xl" />
            </div>
          </article>
          <article className="bg-zinc-200 dark:bg-zinc-900 rounded hover:ring-1 hover:ring-orange-500 h-full w-full p-4 grid grid-cols-2 transition-all">
            <div className="h-full w-full">
              <h3 className="text-center font-bold text-2xl md:text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-300">
                Academicos
              </h3>
              <p className="font-light dark:text-zinc-300 my-2">
                Actualiza el contenido sobre las promociones que se ofrece a
                traves de este panel
              </p>
              <a href="">
                <button className="my-2 px-4 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 border border-orange-500 transition-all">
                  Ver Mas
                </button>
              </a>
            </div>
            <div className="h-full w-full grid place-content-center">
              <FaAddressBook className="text-9xl fill-orange-500 drop-shadow-2xl" />
            </div>
          </article>
          <article className="bg-zinc-200 dark:bg-zinc-900 rounded hover:ring-1 hover:ring-red-500 h-full w-full p-4 grid grid-cols-2 transition-all">
            <div className="h-full w-full">
              <h3 className="text-center font-bold text-2xl md:text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-tl from-red-700 to-red-300">
                Contactos
              </h3>
              <p className="font-light dark:text-zinc-300 my-2">
                Todo sobre la historia de la institucion, agrega y modifica esta
                seccion a traves de paneles de ayuda
              </p>
              <a href="">
                <button className="my-2 px-4 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 border border-red-500 transition-all">
                  Ver Mas
                </button>
              </a>
            </div>
            <div className="h-full w-full grid place-content-center">
              <MdOutlineAlternateEmail className="text-9xl fill-red-500 drop-shadow-2xl" />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
