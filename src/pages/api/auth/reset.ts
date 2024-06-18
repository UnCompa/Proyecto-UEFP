import type { APIRoute } from "astro"
import { supabase } from "../../../lib/supabase"
import { getLangFromUrl } from "../../../i18n/utils"

// reset.ts
export const POST: APIRoute = async ({ request, url }) => {
  const formData = await request.formData()
  const lang = getLangFromUrl(url)
  const redirectUrl = `${url.origin}/${lang}/change-password`
  const email = formData.get('email')?.toString()
  if (email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    })

    if (error) {
      return new Response(JSON.stringify({ message: error.message }), { status: 400 })
    } else {
      return new Response(JSON.stringify({ message: 'Revisa tu correo electrónico para resetear tu contraseña.' }), { status: 200 })
    }
  } else {
    return new Response(JSON.stringify({ message: 'Correo electrónico requerido' }), { status: 400 })
  }
}
