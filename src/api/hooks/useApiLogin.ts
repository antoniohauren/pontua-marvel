import { LoginDto } from "@/api/dto/login.dto";
import { useMutation } from "@tanstack/react-query";

export function useApiLogin(onSuccess: () => void) {
  function mutationFn(data: LoginDto) {
    return new Promise<string>((resolve) => {
      window.localStorage.setItem("token", data.email);

      setTimeout(() => {
        resolve(data.email);
      }, 500);
    });
  }

  return useMutation({
    mutationKey: ["login"],
    mutationFn,
    onSuccess,
  });
}
