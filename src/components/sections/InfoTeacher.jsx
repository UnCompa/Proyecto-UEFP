import { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import { supabase } from "../../lib/supabase";

export default function InfoTeacher({lang}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataEs = async () => {
      const tableLang = "teachers" + lang
      console.log(tableLang);
      const { data } = await supabase.from(tableLang).select("*");
      console.log(data);
      setData(data);
    };
    fetchDataEs();
  }, []);
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-zinc-100  dark:bg-zinc-900 p-4">
      {data.map((teacher) => {
        console.log(teacher);
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
  );
}
