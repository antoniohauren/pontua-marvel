import EmailIcon from "@/assets/emailIcon.svg";
import Input from "@/components/Input";
import { EmailInputProps } from ".";

export default function EmailInput({ onChange, ...props }: EmailInputProps) {
  return (
    <Input
      onChange={onChange}
      {...props}
      icon={<EmailIcon />}
      placeholder="Informe seu email"
    />
  );
}
