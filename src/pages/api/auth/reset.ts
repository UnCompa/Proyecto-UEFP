import type { APIRoute } from "astro"
import { supabase } from "../../../lib/supabase"

// reset.ts
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData()
  const url = request.url
  console.log(url);
  
  const email = formData.get('email')?.toString()
  console.log(email);
  if (email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `http://localhost:4321/es/change-password`
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
