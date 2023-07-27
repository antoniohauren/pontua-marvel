import AttentionIcon from "@/assets/attentionIcon.svg";
import BaseSection from "@/components/BaseSection";
import EmailInput from "@/components/EmailInput/EmailInput";
import LoginButton from "@/components/LoginButton/LoginButton";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import { LoginFormProps } from ".";

export default function LoginForm({}: LoginFormProps) {
  return (
    <BaseSection
      title="Bem-vindo"
      description="informe as suas credenciais de acesso ao portal"
      titleDetail="."
    >
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
    </BaseSection>
  );
}
