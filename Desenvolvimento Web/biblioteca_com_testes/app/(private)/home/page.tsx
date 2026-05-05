"use client";

import { CustomNavbar } from "@/components/CustomNavbar/CustomNavbar";

export default function Home() {
  return (
    <>
      <CustomNavbar data-testid="navbar1" />
      <div>Bem vindo!</div>
    </>
  );
}
