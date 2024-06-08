import React from "react";

const Section = ({ lang, roles }) => {
  return (
    <section className="bg-zinc-200 dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-2 py-4 place-content-center rounded">
      <div className="p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-bold py-4">
          {roles.includes("admin") 
            ? (lang === "es" ? "Empieza a crear y editar la web" : "Start creating and editing the web") 
            : (lang === "es" ? "Explora nuestro dashboard, interactúa con el contenido" : "Explore our dashboard, interact with the content")
          }
        </h2>
        <p className="text-lg text-black dark:text-zinc-300">
          {roles.includes("admin") 
            ? (lang === "es" ? "Aquí podrás tener libertad de cambiar y subir contenido a la plataforma para mantenerla en funcionamiento y actualizada" : "Here you can freely change and upload content to the platform to keep it running and up-to-date")
            : (lang === "es" ? "Visita las secciones permitidas e interactúa con cosas relacionadas con la institución" : "Visit the allowed sections and interact with things related to the institution")
          }
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img className="h-96" src="/svg/calendar-55.svg" alt="" />
      </div>
    </section>
  );
};

export default Section;
