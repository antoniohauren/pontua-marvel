import EmailIcon from "@/assets/emailIcon.svg";
import Input from "@/components/Input";
import { EmailInputProps } from ".";

export default function EmailInput({}: EmailInputProps) {
  return <Input icon={<EmailIcon />} placeholder="Informe seu email" />;
}
