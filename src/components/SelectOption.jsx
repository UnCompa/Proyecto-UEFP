import { Divider } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody,Image } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

export default function App() {
  let tabs = [
    {
      id: "Respeto",
      label: "Respeto",
      content: "En nuestro colegio, promovemos el respeto mutuo entre todos los miembros de la comunidad escolar, reconociendo la diversidad de opiniones, culturas y experiencias.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Responsabilidad",
      label: "Responsabilidad",
      content: "Fomentamos la responsabilidad individual y colectiva, incentivando el cumplimiento de compromisos académicos, el cuidado del entorno escolar y el respeto por las normas establecidas.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Colaboración",
      label: "Colaboración",
      content: "Valoramos el trabajo en equipo y la colaboración entre estudiantes, docentes y personal administrativo, entendiendo que juntos podemos alcanzar metas más altas y fomentar un ambiente de apoyo mutuo.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Creatividad",
      label: "Creatividad",
      content: "Estimulamos la creatividad y la innovación, brindando espacios y recursos para que los estudiantes exploren nuevas ideas, desarrollen su imaginación y encuentren soluciones originales a los desafíos que se les presentan.",
      image: "/imgs/programacion.jpeg"
    },
    {
      id: "Inclusión",
      label: "Inclusión",
      content: "Nuestro colegio se compromete con la inclusión de todos los estudiantes, independientemente de su origen étnico, género, orientación sexual, religión o habilidades, promoviendo un ambiente seguro y acogedor para todos.",
      image: "/imgs/programacion.jpeg"
    }
];

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="danger"
        variant="bordered"
        className="flex flex-col"

      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center justify-center gap-2">
                <FaStar />
                <span className="font-bold hidden md:block">{item.label}</span>
              </div>
            }
            color="danger"
            variant="bordered"
          >
            <Card fullWidth className="font-Rubik w-full container mx-auto" isBlurred>
              <CardBody>
                <div className="flex flex-col md:flex-row gap-x-4 items-center">
                  <div className="h-full w-max py-2">
                    <Image height="100%" src={item.image} />
                  </div>
                  <Divider orientation="vertical"/>
                  <div>
                    <h2 className="text-xl font-bold text-center md:text-start">{item.label}</h2>
                    <p className="text-center md:text-start text-zinc-800 dark:text-zinc-300">{item.content}</p>
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
