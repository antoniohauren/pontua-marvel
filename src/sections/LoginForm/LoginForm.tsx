import AttentionIcon from "@/assets/attentionIcon.svg";
import EmailInput from "@/components/EmailInput/EmailInput";
import LoginButton from "@/components/LoginButton/LoginButton";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import { LoginFormProps } from ".";

export default function LoginForm({}: LoginFormProps) {
  return (
    <div className="max-w-[380px] rounded-xl bg-white p-8 py-10 shadow-sm">
      <h1 className="text-3xl font-bold text-blue/600">
        Bem-vindo<span className="text-[red]">.</span>
      </h1>

      <p className="mt-2 text-gray/500">
        informe as suas credenciais de acesso ao portal
      </p>

      <div className="mt-2 flex flex-col gap-4">
        <EmailInput />

        <PasswordInput />
      </div>

      <div className="mt-2">
        <LoginButton />
      </div>

      <div className="mt-2 flex items-center justify-end gap-1 text-orange/700">
        <div className="h-3 w-3">
          <AttentionIcon />
        </div>

        <p className="cursor-pointer text-xs hover:underline">
          Esqueceu a senha?
        </p>
      </div>
    </div>
  );
}
