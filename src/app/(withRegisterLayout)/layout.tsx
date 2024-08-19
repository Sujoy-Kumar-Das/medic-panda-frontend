import NavBar from "@/components/shared/navbar/NavBar";
import { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
