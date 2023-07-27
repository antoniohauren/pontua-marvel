import LoginIcon from "@/assets/loginIcon.svg";
import Button from "@/components/Button";
import { LoginButtonProps } from ".";

export default function LoginButton({}: LoginButtonProps) {
  return <Button fullWidth={true} title="entrar" icon={<LoginIcon />} />;
}
