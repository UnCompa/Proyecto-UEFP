import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Header from "./Inicio/Header";
import Section from "./Inicio/Section";
import Card from "./Inicio/Card";
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
  }, [roles, user?.id]);

  return (
    <>
      <Header lang={lang} email={email} roles={roles} />
      <main className="my-4 rounded flex flex-col gap-y-4">
        <Section lang={lang} roles={roles} />
        <section className="my-4 flex flex-wrap gap-4">
          <Card
            lang={lang}
            title={lang === "es" ? "Inicio" : "Home"}
            description={
              lang === "es"
                ? "Edita y personaliza la página principal de la institución. Actualiza el lema, la misión y visión, y haz que la primera impresión sea inolvidable."
                : "Edit and customize the institution's main page. Update the motto, mission, and vision, and make the first impression unforgettable."
            }
            link={`/${lang}/dashboard/homepage`}
            icon="home"
            color="text-green-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Sobre Nosotros" : "About Us"}
            description={
              lang === "es"
                ? "Descubre y narra la fascinante historia de la institución. Agrega y modifica esta sección fácilmente para reflejar nuestros logros y valores."
                : "Discover and narrate the fascinating history of the institution. Easily add and modify this section to reflect our achievements and values."
            }
            link={`/${lang}/dashboard/about`}
            icon="about"
            color="text-yellow-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Académicos" : "Academics"}
            description={
              lang === "es"
                ? "Mantén al día la información sobre nuestras promociones académicas. Usa este panel para atraer a futuros estudiantes con contenido actualizado."
                : "Keep information about our academic promotions up-to-date. Use this panel to attract future students with updated content."
            }
            link={`/${lang}/dashboard/academics`}
            icon="academic"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Contactos" : "Contacts"}
            description={
              lang === "es"
                ? "Facilita la comunicación con nuestra institución. Añade y actualiza la información de contacto para que todos puedan conectarse con nosotros fácilmente."
                : "Facilitate communication with our institution. Add and update contact information so everyone can connect with us easily."
            }
            link={`/${lang}/dashboard/contacts`}
            icon="contact"
            color="text-pink-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Galeria" : "Gallery"}
            description={
              lang === "es"
                ? "Muestra los momentos más memorables de la institución. Agrega y organiza fotos para destacar nuestros eventos y logros."
                : "Showcase the institution's most memorable moments. Add and organize photos to highlight our events and achievements."
            }
            link={`/${lang}/dashboard/gallery`}
            icon="image"
            color="text-cyan-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Noticias" : "News"}
            description={
              lang === "es"
                ? "Mantente al día con las últimas novedades y anuncios. Usa este panel para publicar noticias importantes y mantener informada a nuestra comunidad."
                : "Stay up-to-date with the latest news and announcements. Use this panel to post important news and keep our community informed."
            }
            link={`/${lang}/dashboard/news`}
            icon="news"
            color="text-emerald-500"
          />
        </section>
      </main>
    </>
  );
}
