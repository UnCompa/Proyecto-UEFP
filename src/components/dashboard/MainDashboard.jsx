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
            description={lang === "es" ? "Edita la página principal ya sea el lema, la misión y visión de la institución, entre otras cosas" : "Edit the main page, be it the motto, mission and vision of the institution, among other things"}
            link={`/${lang}/dashboard/homepage`}
            icon="home"
            color="text-green-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Sobre Nosotros" : "About Us"}
            description={lang === "es" ? "Todo sobre la historia de la institución, agrega y modifica esta sección a través de paneles de ayuda" : "All about the institution's history, add and modify this section through help panels"}
            link={`/${lang}/dashboard/about`}
            icon="about"
            color="text-yellow-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Académicos" : "Academics"}
            description={lang === "es" ? "Actualiza el contenido sobre las promociones que se ofrece a través de este panel" : "Update the content about the promotions offered through this panel"}
            link={`/${lang}/dashboard/academics`}
            icon="academic"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Contactos" : "Contacts"}
            description={lang === "es" ? "Todo sobre la historia de la institución, agrega y modifica esta sección a través de paneles de ayuda" : "All about the institution's history, add and modify this section through help panels"}
            link={`/${lang}/dashboard/contacts`}
            icon="contact"
            color="text-pink-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Galeria" : "Gallery"}
            description={lang === "es" ? "Todo sobre la historia de la institución, agrega y modifica esta sección a través de paneles de ayuda" : "All about the institution's history, add and modify this section through help panels"}
            link={`/${lang}/dashboard/gallery`}
            icon="image"
            color="text-cyan-500"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Noticias" : "News"}
            description={lang === "es" ? "Todo sobre la historia de la institución, agrega y modifica esta sección a través de paneles de ayuda" : "All about the institution's history, add and modify this section through help panels"}
            link={`/${lang}/dashboard/news`}
            icon="news"
            color="text-emerald-500"
          />
        </section>
      </main>
    </>
  );
}
