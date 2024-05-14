import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { getLangFromUrl } from "../../../i18n/utils";
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const url = new URL(request.url);
  const lang = getLangFromUrl(url);
  const provider = formData.get("provider")?.toString();

  const validProviders = ["google", "github", "discord"];

  if (provider && validProviders.includes(provider)) {
    const { data: providerData, error: providerError } =
      await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          redirectTo: "http://localhost:4321/api/auth/callback",
        },
      });
      (providerData);
      (providerError);
    if (providerError) {
      return new Response(providerError.message, { status: 500 });
    }
    return redirect(providerData.url);
  }
  if (!email || !password) {
    return new Response("Correo electrónico y contraseña obligatorios", {
      status: 400,
    });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return new Response("No pasa", {status: 203})
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });
  return new Response("Pasa", {status: 200});
};
