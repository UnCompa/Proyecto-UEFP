import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    ("Here");
    return new Response("Correo electrónico y contraseña obligatorios", {
      status: 400,
    });
  }
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
    return redirect(`/es/`);
  }
  const { data: updatedProfile } = await supabase
  .from("profiles")
  .update({ username: name })
  .eq("id", data.user?.id)
  .select("*");  
  return redirect(`/es/verification`);
};
