import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";

const CriarPost = () => {
 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [hashtag, setHashtag] = useState('')

  const criarPostApi = async(e)=>{
    e.preventDefault()

    if(!title || !content){
      alert("Titulo e conteúdo são campos obrigatórios.")
    }

    const hashtagsArray = hashtag.split(",")

    await createPost(title, content, image, hashtagsArray)
    .then((response)=>{
      console.log("post criado com sucesso!", response)
    })
    .catch((error)=>{
      console.log("errooo ao criar o post", error)
    })
  }

  useVerificarToken()

  return (
   <>
   <HeaderPerfil titulo={"new question"}/>

   <ContainerCriarPost>
      {/* <Menu/> */}
      <FormStyle onSubmit={criarPostApi}>
        <InputStyle
          placeholder="titulo"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          required
        />

        <TextareaStyle
        placeholder="conteúdo"
        value={content}
        onChange={(e)=> setContent(e.target.value)}
        required
        />

        <InputStyle
        type="text"
        placeholder="Hastags"
        value={hashtag}
        onChange={(e)=> setHashtag(e.target.value)}
        />

        <InputStyle
        type="text"
        label="Imagem"
        placeholder="Digite o endereço da imagem"
        onChange={(e)=> setImage(e.target.value)}
        />

        <ButtonStyle type="Submit">
          Enviar
        </ButtonStyle>
      </FormStyle>
   </ContainerCriarPost>
   </>
  );
};

export default CriarPost;
