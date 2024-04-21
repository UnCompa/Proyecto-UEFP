import { Input } from "@nextui-org/react";
import React from "react";

export default function SignForm() {
  return (
    <form action="/api/auth/signin" method="post" class="flex flex-col">
      <label for="email" class="font-bold">
        Correo electrónico
      </label>
      <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div>
      <Input
        isRequired
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        className="my-2"
      />
      <label for="password" class="font-bold">
        Contraseña
      </label>
      <label htmlFor=""></label>
      <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div>
      <Input
        isRequired
        type="password"
        name="password"
        id="password"
        placeholder="***********"
        className="my-2"
      />
      <button
        type="submit"
        class="bg-gradient-to-l from-blue-500 via-cyan-500 to-sky-400 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/70 transition-all"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
