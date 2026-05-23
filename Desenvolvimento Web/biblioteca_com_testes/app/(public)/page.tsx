"use client";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInputText } from "@/components/CustomInputText/CustomInputText";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  // declaracao de variavel de estado com useState
  const [contador, setContador] = useState<number>(0);

  const [usuario, setUsuario] = useState<string>();
  const [senha, setSenha] = useState<string>();

  const router = useRouter();

  return (
    <CustomContainer title="Login">
      usuário: {usuario}
      <br />
      <CustomInputText
        label="usuário: "
        id="username"
        change={(valor) => {
          setUsuario(valor);
        }}
      ></CustomInputText>
      <br />
      <CustomInputText
        label="senha: &nbsp;&nbsp;&nbsp;"
        id="password"
      ></CustomInputText>
      <CustomButton
        label="entrar"
        onClick={() => {
          // redirecionamento para o login
          router.push("/home");
        }}
      />
    </CustomContainer>
  );
}
