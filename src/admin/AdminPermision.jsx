import React from "react";
import { useAuth } from "../hooks/useAuth";

export function AdminPermision({ children }) {
  const { auth } = useAuth();
  const { role } = auth?.user;
  return <>{role === "admin" && children}</>;
}
