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
        fullWidth
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center justify-center gap-2">
                <FaStar />
                <span>{item.label}</span>
              </div>
            }
            color="danger"
            variant="bordered"
          >
            <Card isHoverable fullWidth className="font-Rubik" isBlurred>
              <CardBody>
                <div className="flex gap-x-4">
                  <div className="h-full w-max">
                    <Image width={500} height={600} src={item.image} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{item.label}</h2>
                    <p>{item.content}</p>
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
