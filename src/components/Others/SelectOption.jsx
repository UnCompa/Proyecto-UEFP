import { Divider } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";
import {
  FaDove,
  FaUniversalAccess,
  FaMedal,
  FaPeopleCarry,
  FaHandsHelping,
  FaBalanceScale,
  FaStar,
} from "react-icons/fa";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import Loader from "../Ui/Loader";

export default function SelectOption({ lang }) {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectTabs = async (table) => {
    setLoading(true);
    const { data: dataTabs } = await supabase
      .from(table)
      .select("*")
      .order("id", { ascending: true });
    setTabs(dataTabs);
    setLoading(false);
  };

  useEffect(() => {
    if (lang === "es") {
      selectTabs("values_es");
    } else if (lang === "en") {
      selectTabs("values_en");
    }
  }, [lang]);

  return loading ? (
    <div className="flex justify-center items-center gap-2 flex-col">
      <h2 className="text-3xl md:text-5xl font-Rubik font-bold py-2">
        Cargando
      </h2>
      <Loader />
    </div>
  ) : (
    <div className="flex aspect-auto w-full flex-col justify-center items-center">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="danger"
        variant="light"
        fullWidth
      >
        {(item) => (
          <Tab
            aria-label={item.title}
            key={item.id}
            title={
              <div className="flex flex-col">
                <div className="flex items-center justify-center gap-2">
                  <FaStar />
                  <span className="font-bold md:block">{item.label}</span>
                </div>
              </div>
            }
            color="danger"
            variant="light"
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
