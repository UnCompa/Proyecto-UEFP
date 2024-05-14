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
    ("Here");
    return new Response("Correo electrónico y contraseña obligatorios", {
      status: 400,
    });
  }
  (name, email, password);

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: name
      }
    }
  });  
  if (error) {
    (error);
    return redirect(`/${lang}/`);
  }

  const { data: updatedProfile } = await supabase
  .from("profiles")
  .update({ username: name })
  .eq("id", data.user?.id)
  .select("*");
  (updatedProfile);
  
  return redirect(`/${lang}/verification`);
};
