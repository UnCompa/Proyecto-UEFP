import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { getLangFromUrl } from "../../../i18n/utils";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const url = new URL(request.url);
  const lang = getLangFromUrl(url);
  if (!email || !password) {
    console.log("Here");
    return new Response("Correo electrónico y contraseña obligatorios", {
      status: 400,
    });
  }
  console.log(name,email,password);
  
  const {data,error} = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(data);
  console.log(data !== null);
  
  if (error) {
    console.log(error);
    return redirect(`/${lang}/`);
  }
  if (data) {
    const user = data.user
    console.log(user);
    const newData = {
      id: user?.id,
      username: name,
    };
    console.log(newData);
    
    const resultados = await supabase
      .from("profiles")
      .upsert(newData);
    console.log(resultados);
  }

  console.log("Here");
  return redirect(`/${lang}/verification`);
};
