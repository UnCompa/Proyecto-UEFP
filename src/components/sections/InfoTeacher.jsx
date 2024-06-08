import { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import { supabase } from "../../lib/supabase";
import Loader from "../Ui/Loader";

export default function InfoTeacher({lang}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const tableLang = "teachers" + lang
    const fetchDataEs = async () => {
      setLoading(true)
      const { data } = await supabase.from(tableLang).select("*").order("id", {ascending: true})
      setLoading(false)
      setData(data);
    };
    fetchDataEs();
  }, []);
  return (
   <>
   {
    loading ? (
      <div className="flex justify-center items-center gap-2 flex-col">
        <h2 className="text-3xl md:texl-5xl font-Rubik font-bold py-2">Cargando</h2>
        <Loader/>
      </div>
    ) : (
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-zinc-100  dark:bg-zinc-900 p-4">
      {data.map((teacher) => {
        (teacher);
        return (
          <PeopleCard
          key={teacher.id}
          teacher={teacher.name}
          content={teacher.phrase}
          work={teacher.profession}
          img={teacher.image_link}
        />
        )
      })}
    </div>
    )
   }
   </>
  );
}
