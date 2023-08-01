import { useMutation } from "@tanstack/react-query";

export function useApiLogin(onSuccess: () => void) {
  function mutationFn() {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("token");
      }, 500);
    });
  }

  return useMutation({
    mutationKey: ["login"],
    mutationFn,
    onSuccess,
  });
}
