import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
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
    return redirect(`/en/`);
  }
  const { data: updatedProfile } = await supabase
  .from("profiles")
  .update({
    username: name,
    avatar_url:
      "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg",
    email: email
  })
  .eq("id", data.user?.id)
  .select("*");  
  return redirect(`/en/verification`);
};
