import EyeCloseIcon from "@/assets/eyeCloseIcon.svg";
import EyeOpenIcon from "@/assets/eyeOpenIcon.svg";
import Input from "@/components/Input/Input";
import { useRef, useState } from "react";
import { PasswordInputProps } from ".";

export default function PasswordInput({}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleVisible() {
    setVisible(!visible);
    inputRef.current?.focus();
  }

  return (
    <Input
      inputRef={inputRef}
      icon={visible ? <EyeCloseIcon /> : <EyeOpenIcon />}
      type={visible ? "text" : "password"}
      onClick={handleVisible}
      placeholder="Informe sua senha"
    />
  );
}
