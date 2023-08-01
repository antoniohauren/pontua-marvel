import { LoginDto, loginSchema } from "@/api/dto/login.dto";
import { useApiLogin } from "@/api/hooks/useApiLogin";
import AttentionIcon from "@/assets/attentionIcon.svg";
import BaseSection from "@/components/BaseSection";
import EmailInput from "@/components/EmailInput/";
import LoginButton from "@/components/LoginButton/";
import PasswordInput from "@/components/PasswordInput/";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormProps } from ".";

export default function LoginForm({}: LoginFormProps) {
  const form = useForm<LoginDto>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const isFormValid = form.formState.isValid;
  const { mutate, isLoading } = useApiLogin(() => navigate("/"));

  function handleLogin() {
    form.handleSubmit(() => {
      mutate();
    })();
  }

  return (
    <BaseSection
      title="Bem-vindo"
      description="informe as suas credenciais de acesso ao portal"
      titleDetail="."
    >
      <div className="mt-2 flex flex-col gap-4">
        <Controller
          name="email"
          control={form.control}
          render={({ field: { onChange, value } }) => (
            <EmailInput value={value} onChange={onChange} />
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field: { onChange, value } }) => (
            <PasswordInput value={value} onChange={onChange} />
          )}
        />
      </div>

      <div className="mt-2">
        <LoginButton
          isDisabled={!isFormValid}
          onClick={handleLogin}
          isLoading={isLoading}
        />
      </div>

      <div className="mt-2 flex items-center justify-end gap-1 text-orange/700">
        <div className="h-3 w-3">
          <AttentionIcon />
        </div>

        <Link
          to={"/forgot-password"}
          className="cursor-pointer text-xs hover:underline"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </BaseSection>
  );
}
