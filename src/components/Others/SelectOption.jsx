import { Divider } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";
import {
  FaDove,
  FaUniversalAccess,
  FaMedal,
  FaPeopleCarry,
  FaHandsHelping,
  FaBalanceScale,
} from "react-icons/fa";

export default function SelectOption({ lang }) {
  let tabs;
  if (lang === "es") {
    tabs = [
      {
        id: "Libertad",
        label: "Libertad",
        content:
          "Valoramos la libertad como un derecho fundamental, alentando a los estudiantes a expresar sus pensamientos libremente y a tomar decisiones independientes mientras respetan los derechos de los demás.",
        image: "/imgs/liberty.jpg",
        icon: FaDove, // Paloma de la paz
      },
      {
        id: "Inclusión",
        label: "Inclusión",
        content:
          "Nuestro colegio se compromete con la inclusión de todos los estudiantes, independientemente de su origen étnico, género, orientación sexual, religión o habilidades, promoviendo un ambiente seguro y acogedor para todos.",
        image: "/imgs/inclusion.jpg",
        icon: FaUniversalAccess, // Accesibilidad universal
      },
      {
        id: "Dignidad",
        label: "Dignidad",
        content:
          "Defendemos la dignidad de cada individuo, asegurando que cada miembro de nuestra comunidad sea tratado con respeto y tenga la oportunidad de alcanzar su máximo potencial.",
        image: "/imgs/dignity.jpg",
        icon: FaMedal, // Medalla
      },
      {
        id: "Fraternidad",
        label: "Fraternidad",
        content:
          "Fomentamos un espíritu de fraternidad y solidaridad entre los estudiantes, el personal y la comunidad en general, promoviendo la cooperación y el apoyo mutuo.",
        image: "/imgs/fraternity.jpg",
        icon: FaPeopleCarry, // Personas colaborando
      },
      {
        id: "Gratitud",
        label: "Gratitud",
        content:
          "Cultivamos la gratitud alentando a los estudiantes a apreciar los esfuerzos de los demás, reconocer el valor de las oportunidades que reciben y expresar agradecimiento por el apoyo y la orientación.",
        image: "/imgs/gratitude.jpg",
        icon: FaHandsHelping, // Manos ayudando
      },
      {
        id: "Justicia",
        label: "Justicia",
        content:
          "Luchamos por la justicia promoviendo la equidad y la imparcialidad dentro de nuestra comunidad escolar, asegurando que cada individuo sea tratado con justicia y respeto.",
        image: "/imgs/justice.jpg",
        icon: FaBalanceScale, // Balanza de justicia
      },
    ];
  } else if (lang === "en") {
    tabs = [
      {
        id: "Freedom",
        label: "Freedom",
        content:
          "We value freedom as a fundamental right, encouraging students to express their thoughts freely and make independent decisions while respecting the rights of others.",
        image: "/imgs/liberty.jpg",
        icon: FaDove, // Peace dove
      },
      {
        id: "Inclusion",
        label: "Inclusion",
        content:
          "Our school is committed to the inclusion of all students, regardless of their ethnic origin, gender, sexual orientation, religion, or abilities, promoting a safe and welcoming environment for all.",
        image: "/imgs/inclusion.jpg",
        icon: FaUniversalAccess, // Universal access
      },
      {
        id: "Dignity",
        label: "Dignity",
        content:
          "We defend the dignity of every individual, ensuring that each member of our community is treated with respect and has the opportunity to reach their full potential.",
        image: "/imgs/dignity.jpg",
        icon: FaMedal, // Medal
      },
      {
        id: "Fraternity",
        label: "Fraternity",
        content:
          "We foster a spirit of fraternity and solidarity among students, staff, and the community at large, promoting cooperation and mutual support.",
        image: "/imgs/fraternity.jpg",
        icon: FaPeopleCarry, // People collaborating
      },
      {
        id: "Gratitude",
        label: "Gratitude",
        content:
          "We cultivate gratitude by encouraging students to appreciate the efforts of others, recognize the value of the opportunities they receive, and express gratitude for support and guidance.",
        image: "/imgs/gratitude.jpg",
        icon: FaHandsHelping, // Helping hands
      },
      {
        id: "Justice",
        label: "Justice",
        content:
          "We strive for justice by promoting equity and impartiality within our school community, ensuring that each individual is treated with fairness and respect.",
        image: "/imgs/justice.jpg",
        icon: FaBalanceScale, // Justice scale
      },
    ];
  }

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="danger"
        variant="underlined"
        className="flex flex-col"
      >
        {(item) => (
          <Tab
          aria-label={item.title}
            key={item.id}
            title={
              <div className="flex items-center justify-center gap-2">
                {item.icon && <item.icon className="text-lg md:text-normal" />}
                <span className="font-bold hidden md:block">{item.label}</span>
              </div>
            }
            color="danger"
            variant="bordered"
          >
            <Card
              fullWidth
              className="font-Rubik w-full container mx-auto"
              isBlurred
            >
              <CardBody>
                <div className="flex flex-col md:flex-row gap-x-4 items-center">
                  <div className="h-max w-max p-2">
                    <Image
                      src={item.image}
                      alt={`Imagen sobre la ${item.label}`}
                      className="aspect-video bg-zinc-400 dark:bg-black max-w-full lg:max-w-96 h-32 object-cover"
                    />
                  </div>
                  <Divider orientation="vertical" />
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-center md:text-start">
                      {item.label}
                    </h3>
                    <p className="text-center md:text-start text-zinc-800 dark:text-zinc-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
