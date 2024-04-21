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
  
  const result = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(result);
  if (result) {
    const user = await supabase.auth.getSession();
    console.log(user);
  }
  const newData = {
    full_name: "",
    /* const {} = await supabase
      .from("profiles")
      .upsert(newData, { returning: "minimal" }); */
  };
  if (result.error) {
    console.log(result.error);
    return new Response(result.error.message, { status: 500 });
  }

  console.log("Here");
  return redirect(`/${lang}/verification`);
};
