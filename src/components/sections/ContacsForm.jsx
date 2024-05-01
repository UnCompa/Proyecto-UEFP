import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
export default function ContacsForm({ urlStr, url }) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("asunto", data.asunto);
    formData.append("mensaje", data.mensaje);
    console.log(formData);
    const res = await fetch(
      "https://formsubmit.co/brandonowo26@gmail.com",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
    console.log(res);
  });
  return (
    <form
      className="flex flex-col gap-y-2 font-Rubik w-full"
      onSubmit={onSubmit}
    >
      <motion.label
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ transition: 0.1, ease: "easeOut" }}
        htmlFor="email"
      >
        Correo Electronico
      </motion.label>
      <div className="bg-gradient-to-r to-red-500/30 from-pink-500 h-0.5 w-1/2 rounded"></div>
      <Input
        type="email"
        variant="bordered"
        color="danger"
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
        <div className="flex items-center gap-x-2">
          <RxCrossCircled className="text-red-500" />
          <span className="font-Rubik text-xs py-1 text-red-500 italic">
            {errors.email.message}
          </span>
        </div>
      )}
      <motion.label
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ transition: 0.1, ease: "easeOut" }}
        htmlFor="Asunto"
      >
        Asunto
      </motion.label>
      <div className="bg-gradient-to-r to-red-500/30 from-pink-500 h-0.5 w-1/2 rounded"></div>
      <Input
        type="text"
        variant="bordered"
        color="danger"
        placeholder="Ej: Solicitud de informacion"
        name="Asunto"
        {...register("asunto", {
          required: {
            value: true,
            message: "El asunto es requerido",
          },
          minLength: {
            value: 5,
            message: "El asunto debe ser de minimo 5 caracteres",
          },
          maxLength: {
            value: 42,
            message: "El asunto maximo es de 42 caracteres",
          },
        })}
      />
      {errors.asunto && (
        <div className="flex items-center gap-x-2">
          <RxCrossCircled className="text-red-500" />
          <span className="font-Rubik text-xs py-1 text-red-500 italic">
            {errors.asunto.message}
          </span>
        </div>
      )}
      <motion.label
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ transition: 0.1, ease: "easeOut" }}
        htmlFor="Contenido"
      >
        Mensaje
      </motion.label>
      <div className="bg-gradient-to-r to-red-500/30 from-pink-500 h-0.5 w-1/2 rounded"></div>
      <Textarea
        color="danger"
        variant="bordered"
        placeholder="Ej: Buenas tardes deseo..."
        name="Contenido"
        {...register("mensaje", {
          required: {
            value: true,
            message: "El mensaje es requerido",
          },
          minLength: {
            value: 24,
            message: "El mensaje debe ser de minimo 24 caracteres",
          },
          maxLength: {
            value: 320,
            message: "El asunto maximo es de 320 caracteres",
          },
        })}
      />
      {errors.mensaje && (
        <div className="flex items-center gap-x-2">
          <RxCrossCircled className="text-red-500" />
          <span className="font-Rubik text-xs py-1 text-red-500 italic">
            {errors.mensaje.message}
          </span>
        </div>
      )}
      <input type="hidden" name="_next" value={urlStr} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <button
        type="submit"
        className="bg-red-500 py-2 rounded my-2 shadow-lg dark:shadow-red-500/30"
      >
        Enviar información
      </button>
    </form>
  );
}
