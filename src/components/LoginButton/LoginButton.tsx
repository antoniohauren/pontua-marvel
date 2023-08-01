import LoginIcon from "@/assets/loginIcon.svg";
import Button from "@/components/Button";
import { LoginButtonProps } from ".";

export default function LoginButton({
  isDisabled,
  isLoading,
  onClick,
}: LoginButtonProps) {
  return (
    <Button
      fullWidth={true}
      title="entrar"
      icon={<LoginIcon />}
      disabled={isDisabled}
      onClick={onClick}
      isLoading={isLoading}
    />
  );
}
