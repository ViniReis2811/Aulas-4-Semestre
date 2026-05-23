"use client";

import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomInputText } from "@/components/CustomInputText/CustomInputText";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditBook() {
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [stockQuantity, setStockQuantity] = useState<string>();
  const [createdAt, setCreatedAt] = useState<string>();

  const params = useParams();

  const getBookById = async () => {
    const response = await axios.get("https://meusite.com/api/book/1")
    console.log(response.data);
  };

  useEffect(() => { getBookById() }, [])

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
        label="Alterar"
        onClick={() => {
          console.log({
            name,
            author,
            stockQuantity,
            createdAt,
          });
          alert(`Livro ${params.id} alterado com sucesso`);
        }}
      />
    </>
  );
}
