"use client";
import React, { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMount, setHasMount] = useState(false);
  useEffect(() => {
    setHasMount(true);
  }, []);
  if (!hasMount) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
