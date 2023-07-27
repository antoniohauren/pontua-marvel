import Button from "@/components/Button/";
import EmailInput from "@/components/EmailInput/EmailInput";
import { isEmail } from "@/helpers/isEmail";
import { useState } from "react";
import { ForgotPasswordProps } from ".";

export default function ForgotPassword({}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");

  const isDisabled = !isEmail(email);

  return (
    <div className="max-w-[380px] rounded-xl bg-white p-8 py-10 shadow-sm">
      <h1 className="text-3xl font-bold text-blue/600">
        Recuperar senha<span className="text-[red]">.</span>
      </h1>

      <p className="mt-2 text-gray/500">
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
        link com as instruções para você redefinir a sua senha.
      </p>

      <div className="mt-2 flex flex-col gap-4">
        <EmailInput value={email} onChange={(e) => setEmail(e)} />
      </div>

      <div className="mt-2">
        <Button title="enviar link" fullWidth={true} disabled={isDisabled} />
      </div>
    </div>
  );
}
