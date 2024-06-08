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
      <Header lang={lang} email={email} />
      <main className="my-4 rounded flex flex-col gap-y-4">
        <Section lang={lang} roles={roles} />
        <section className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card
            lang={lang}
            title={lang === "es" ? "Inicio" : "Home"}
            description={lang === "es" ? "Edita la página principal ya sea el lema, la misión y visión de la institución, entre otras cosas" : "Edit the main page, be it the motto, mission and vision of the institution, among other things"}
            link={`/${lang}/dashboard/homepage`}
            icon="home"
            gradient="r from-green-700 to-green-300"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Sobre Nosotros" : "About Us"}
            description={lang === "es" ? "Todo sobre la historia de la institución, agrega y modifica esta sección a través de paneles de ayuda" : "All about the institution's history, add and modify this section through help panels"}
            link=""
            icon="about"
            gradient="tl from-purple-700 to-purple-300"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Académicos" : "Academics"}
            description={lang === "es" ? "Actualiza el contenido sobre las promociones que se ofrece a través de este panel" : "Update the content about the promotions offered through this panel"}
            link=""
            icon="academic"
            gradient="r from-orange-700 to-orange-300"
          />
          <Card
            lang={lang}
            title={lang === "es" ? "Contactos" : "Contacts"}
            description={lang === "es" ? "Todo sobre la historia de la institución, agrega y modifica esta sección a través de paneles de ayuda" : "All about the institution's history, add and modify this section through help panels"}
            link=""
            icon="contact"
            gradient="tl from-red-700 to-red-300"
          />
        </section>
      </main>
    </>
  );
}
