import Button from "@/components/Button";
import { ForgotPasswordSuccessProps } from ".";

export default function ForgotPasswordSuccess({}: ForgotPasswordSuccessProps) {
  return (
    <div className="max-w-[380px] rounded-xl bg-white p-8 py-10 shadow-sm">
      <h1 className="text-3xl font-bold text-blue/600">
        Tudo certo<span className="text-[red]"> {";)"}</span>
      </h1>

      <p className="mt-2 text-gray/500">
        Foi enviado um e-mail para você com instruções de como redefinir a sua
        senha.
      </p>

      <div className="mt-2">
        <Button title="voltar para o login" fullWidth={true} />
      </div>
    </div>
  );
}
