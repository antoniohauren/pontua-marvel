import BaseSection from "@/components/BaseSection/BaseSection";
import Button from "@/components/Button/";
import EmailInput from "@/components/EmailInput/EmailInput";
import { isEmail } from "@/helpers/isEmail";
import { useState } from "react";
import { ForgotPasswordProps } from ".";

export default function ForgotPassword({}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");

  const isDisabled = !isEmail(email);

  return (
    <BaseSection
      title="Recuperar senha"
      titleDetail="."
      description="Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha."
    >
      <div className="flex flex-col gap-2">
        <EmailInput value={email} onChange={(e) => setEmail(e)} />

        <Button title="enviar link" fullWidth={true} disabled={isDisabled} />
      </div>
    </BaseSection>
  );
}
