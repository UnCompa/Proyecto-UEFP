import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { getLangFromUrl } from "../../i18n/utils";
export default function ContacsForm({ urlStr,url }) {
  const lang = getLangFromUrl(url)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = handleSubmit(async (data) => {
    console.log("Hola");
    console.log(data);
    console.log(errors);
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("asunto", data.asunto)
    formData.append("mensaje", data.mensaje)
    console.log(formData);
    const res = await fetch("https://formsubmit.co/brandonddxd@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    console.log(res);
  });
  return (
    <form
      className="flex flex-col gap-y-2 font-Rubik w-full"
      onSubmit={onSubmit}
    >
      <label htmlFor="email"> Correo Electronico </label>
      <Input
        type="email"
        variant="underlined"
        color="default"
        placeholder="tuemail@gmail.com"
        name="email"
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
        <span className="py-2 text-red-500 italic">{errors.email.message}</span>
      )}
      <label htmlFor="Asunto"> Asunto </label>
      <Input
        type="text"
        variant="underlined"
        color="default"
        placeholder="Ej: Solicitud de informacion"
        name="Asunto"
        {...register("asunto", {
          required: {
            value: true,
            message: "El asunto es requerido",
          },
          minLength: {
            value: 5,
            message: "El asunto debe ser de minimo 5 caracteres"
          },
          maxLength: {
            value: 42,
            message: "El asunto maximo es de 42 caracteres"
          }
        })}
      />
      {errors.asunto && (
        <span className="py-2 text-red-500 italic">
          {errors.asunto.message}
        </span>
      )}
      <label htmlFor="Contenido"> Mensaje </label>
      <Textarea
        color="default"
        variant="underlined"
        placeholder="Ej: Buenas tardes deseo..."
        name="Contenido"
        {...register("mensaje", {
          required: {
            value: true,
            message: "El mensaje es requerido",
          },
          minLength: {
            value: 24,
            message: "El mensaje debe ser de minimo 24 caracteres"
          },
          maxLength: {
            value: 320,
            message: "El asunto maximo es de 320 caracteres"
          }
        })}
      />
      {errors.mensaje && (
        <span className="py-2 text-red-500 italic">
          {errors.mensaje.message}
        </span>
      )}
      <input type="hidden" name="_next" value={urlStr} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table"/>
      <button type="submit">Enviar informacion</button>
    </form>
  );
}
