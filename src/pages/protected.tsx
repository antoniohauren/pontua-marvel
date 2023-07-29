import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectPage({ children }: { children: ReactNode }) {
  const logged = true;

  if (!logged) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
