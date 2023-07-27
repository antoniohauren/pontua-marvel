import BaseSection from "@/components/BaseSection/BaseSection";
import Button from "@/components/Button";
import { ForgotPasswordSuccessProps } from ".";

export default function ForgotPasswordSuccess({}: ForgotPasswordSuccessProps) {
  return (
    <BaseSection
      title="Tudo certo"
      titleDetail=" ;)"
      description="Foi enviado um e-mail para você com instruções de como redefinir a sua senha."
    >
      <Button title="voltar para o login" fullWidth={true} />
    </BaseSection>
  );
}
