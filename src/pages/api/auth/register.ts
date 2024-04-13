import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { getLangFromUrl } from "../../../i18n/utils";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
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

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error);
    return new Response(error.message, { status: 500 });
  }

  console.log("Here");
  return redirect(`/${lang}/`);
};
