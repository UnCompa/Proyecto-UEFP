// src/pages/api/auth/change-password.ts

import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const formData = await request.formData();
    const newPassword = formData.get("newPassword")?.toString();

    // Validación de la fortaleza de la contraseña
    if (newPassword && newPassword.length < 6) {
      return new Response(
        JSON.stringify({
          error: "La contraseña debe tener al menos 6 caracteres.",
        }),
        { status: 400 }
      );
    }

    // Actualización de la contraseña en Supabase
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    
    console.log(data);
    console.log(error);
    
    // Manejo de errores de Supabase
    if (error) {
      console.error("Error al cambiar la contraseña en Supabase:", error);
      return new Response(
        JSON.stringify({
          error:
            "Error al cambiar la contraseña. Por favor intenta nuevamente más tarde.",
        }),
        { status: 500 }
      );
    }

    // Si no hay errores, se devuelve una respuesta exitosa
    return new Response(
      JSON.stringify({ message: "Contraseña cambiada exitosamente." }),
      { status: 200 }
    );
  } catch (error) {
    // Captura de errores generales
    console.error("Error al cambiar la contraseña:", error);
    return new Response(
      JSON.stringify({
        error:
          "Error al cambiar la contraseña. Por favor intenta nuevamente más tarde.",
      }),
      { status: 500 }
    );
  }
};
