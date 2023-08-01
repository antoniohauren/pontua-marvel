import { ForgotPasswordDto } from "@/api/dto/forgot-password.dto";
import BaseSection from "@/components/BaseSection";
import Button from "@/components/Button/";
import EmailInput from "@/components/EmailInput";
import { isEmail } from "@/helpers/isEmail";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordProps } from ".";

export default function ForgotPassword({}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const form = useForm<ForgotPasswordDto>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordDto> = () =>
    form.handleSubmit(() => navigate("/forgot-password/success"))();

  const isDisabled = !isEmail(email);

  return (
    <BaseSection
      title="Recuperar senha"
      titleDetail="."
      description="Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha."
    >
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <EmailInput value={email} onChange={(e) => setEmail(e)} />

        <Button
          type="submit"
          title="enviar link"
          fullWidth={true}
          disabled={isDisabled}
        />
      </form>
    </BaseSection>
  );
}
