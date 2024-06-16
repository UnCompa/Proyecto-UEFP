import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import {Toaster,toast} from 'sonner'
export default function SignForm({ lang, navigate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  (lang);
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: formData,
    });
    if(res.status === 203) {
      toast.error("La contraseña o el correo son incorrectos")
    }
    if(res.status === 200) {
      window.location.href = `/${lang}/dashboard`
    }
  });
  return (
    <>
    <Toaster position="top-center" richColors/>
      <form
        action="/api/auth/signin"
        method="post"
        class="flex flex-col"
        onSubmit={onSubmit}
      >
        <label for="email" class="font-bold">
          {lang === "es" ? " Correo electrónico" : "Email"}
        </label>
        <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-purple-500 via-red-500 to-orange-400 rounded-full"></div>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="my-2"
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido",
            },
            pattern: {
              value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
              message: "Correo no valido",
            },
          })}
        />
        {errors.email && (
          <span className="py-2 text-red-500 italic">
            {errors.email.message}
          </span>
        )}
        <label for="password" class="font-bold">
        {lang === "es" ? "Contraseña" : "Password"}
        </label>
        <label htmlFor=""></label>
        <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-purple-500 via-red-500 to-orange-400 rounded-full"></div>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="***********"
          className="my-2"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe ser de minimo 6 caracteres",
            },
            maxLength: {
              value: 32,
              message: "La contraseña maxima es de 32 caracteres",
            },
          })}
        />
        <a href={`/${lang}/reset-password`} className="text-red-300 my-1">
          {lang === "es" ? "¿Olvidaste tu contraseña?" : "Forget your password?"}
        </a>
        {errors.password && (
          <span className="py-2 text-red-500 italic">
            {errors.password.message}
          </span>
        )}
        <button
          type="submit"
          class="bg-gradient-to-l from-purple-500 via-red-500 to-orange-400 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all"
        >
          {lang === "es" ? "Iniciar sesión" : "Log in"}
        </button>
      </form>
    </>
  );
}