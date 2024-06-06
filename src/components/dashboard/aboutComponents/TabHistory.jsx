import { useEffect, useState } from "react";
import CardInfo from "../../Cards/CardInfo.astro";
import { supabase } from "../../../lib/supabase";

export default function TabHistory() {
  const [data, setData] = useState()
  useEffect(() => {
    supabase.from("historyes").select("*")
    .then(data => console.log(data))
  },[]);
  return (
    <div>
      <h2>Suba mas parte</h2>
      <section>
      </section>
    </div>
  );
}
