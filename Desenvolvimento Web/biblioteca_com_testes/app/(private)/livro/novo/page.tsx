"use client";

import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomInputText } from "@/components/CustomInputText/CustomInputText";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import { useState } from "react";

export default function CreateBook() {
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [stockQuantity, setStockQuantity] = useState<string>();
  const [createdAt, setCreatedAt] = useState<string>();

  return (
    <>
      <CustomInputText
        id="name"
        label="Nome: "
        change={(value) => setName(value)}
      />
      <br />
      <CustomSelect
        id="author"
        label="Autor: "
        change={(value) => setAuthor(value)}
      />
      <br />
      <CustomInputText
        id="stockQuantity"
        label=" Qtde. em estoque: "
        change={(value) => setStockQuantity(value)}
      />
      <br />
      <CustomInputText
        id="createdAt"
        label="Data de cadastro: "
        change={(value) => setCreatedAt(value)}
      />
      <br />
      <br />
      <CustomButton
        label="Cadastrar"
        onClick={() => {
          console.log({
            name,
            author,
            stockQuantity,
            createdAt,
          });
          alert("Livro cadastrado com sucesso");
        }}
      />
    </>
  );
}
