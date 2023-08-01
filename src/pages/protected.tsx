import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectPage({ children }: { children: ReactNode }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== undefined && token === null) {
      setShouldRedirect(true);
    }
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
