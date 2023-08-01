import LoginIcon from "@/assets/loginIcon.svg";
import Button from "@/components/Button";
import { LoginButtonProps } from ".";

export default function LoginButton({
  isDisabled,
  isLoading,
}: LoginButtonProps) {
  return (
    <Button
      fullWidth={true}
      title="entrar"
      icon={<LoginIcon />}
      disabled={isDisabled}
      type="submit"
      isLoading={isLoading}
    />
  );
}
