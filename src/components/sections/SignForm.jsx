import { Input, spacer } from "@nextui-org/react";
import { useForm } from "react-hook-form";
export default function SignForm({lang,navigate}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  console.log(lang)
  const onSubmit = handleSubmit(async(data) => {
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("password", data.password)
    console.log(formData);
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: formData
    })
    console.log(res.redirected);
    res.redirected ? window.location.href = `/${lang}/dashboard` : window.location.href = `/${lang}/register`
  });
  return (
    <form
      action="/api/auth/signin"
      method="post"
      class="flex flex-col"
      onSubmit={onSubmit}
    >
      <label for="email" class="font-bold">
        Correo electrónico
      </label>
      <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        className="my-2"
        {...register("email", {
          required: {
            value: true,
            message: "El email es requerido"
          },
          pattern: {
            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
            message: "Correo no valido"
          }
        })}
      />
      {
        errors.email && <span className="py-2 text-red-500 italic">{errors.email.message}</span>
      }
      <label for="password" class="font-bold">
        Contraseña
      </label>
      <label htmlFor=""></label>
      <div class="h-1 my-2 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-400 rounded-full"></div>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="***********"
        className="my-2"
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es requerida"
          },
          minLength: {
            value: 6,
            message: "La contraseña debe ser de minimo 6 caracteres"
          },
          maxLength: {
            value: 32,
            message: "La contraseña maxima es de 32 caracteres"
          }
        })}
      />
      {
        errors.password && <span className="py-2 text-red-500 italic">{errors.password.message}</span>
      }
      <button
        type="submit"
        class="bg-gradient-to-l from-blue-500 via-cyan-500 to-sky-400 py-2 my-2 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/70 transition-all"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
