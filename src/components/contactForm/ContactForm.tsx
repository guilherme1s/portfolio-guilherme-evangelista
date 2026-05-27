import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MessageModal } from "../MessageModal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "Mensagem muito curta"),
});

export type contactFormSchemaType = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSubmitForm = ({
    email,
    message,
    name,
  }: contactFormSchemaType) => {
    setIsLoading(true);

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        emailPublicKey,
      )
      .then(() => {
        setModalMessage("Mensagem enviada com sucesso!");
        setOpen(true);
        setIsLoading(false);
        reset();
      })
      .catch(() => {
        setModalMessage(
          "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
        );
        setIsLoading(false);
        setOpen(true);
      });
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="rounded-xl p-6 border border-gray-300">
      <MessageModal
        message={modalMessage}
        isOpen={open}
        onClose={handleCloseModal}
      />

      {isLoading && (
        <MessageModal
          message="Enviando..."
          isOpen={isLoading}
          onClose={() => {}}
        />
      )}

      <h1 className="text-3xl text-center font-medium mb-6">
        Entre em contato
      </h1>

      <form
        className="flex flex-col gap-6 justify-center"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="flex flex-col">
          <label htmlFor="nameInput">Nome</label>
          <input
            id="nameInput"
            placeholder="Seu nome"
            className="rounded-sm mt-1 p-2 border placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("name")}
          />

          {errors.name && (
            <span className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            placeholder="seu@email.com"
            type="email"
            className="rounded-sm mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
            {...register("email")}
          />

          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="messageInput">Mensagem</label>
          <textarea
            id="messageInput"
            placeholder="Sua mensagem"
            className="placeholder-gray-400 h-32 resize-none mt-1 rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("message")}
          />

          {errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="p-2 text-white bg-primary cursor-pointer rounded-md font-medium mt-6 hover:text-gray-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
