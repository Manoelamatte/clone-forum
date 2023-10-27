import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {

    const [loading, setLoading] = useState(true)
    const [forumTopics, setforumTopics] = useState([])

    const {selectedPostId} = useContext(GlobalStateContect)

    useEffect(()=>{
      getPostAll(setforumTopics)
    }, [])

  return (
    <>
    {
      loading ?(
        <ContainerCard>
          {forumTopics && forumTopics.map(dado =>{
            return(
              <CardStyle key={dado.post.id}>
                  <PerfilUsuario>
                    <ImageCard src={'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'} />
                 
 
                  <ContainerPerfil>
                    <HomeCard>{dado.creator_username}</HomeCard>
                    <MensagemCard>{dado.post_created_at}</MensagemCard>
                  </ContainerPerfil>
                </PerfilUsuario>

                  <TituloCard>{dado.post_title}</TituloCard>

                  <CardPost>
                    <ImgPost src={dado.post_image} alt='foto post'/>
                    <ConteudoCard>{dado.post_content}</ConteudoCard>
                  </CardPost>

                  <EditPost>
                    <Comentar>
                      postId={dado.post_id}
                      comments={dado.comments}
                      autorId={dado.created_id}
                    </Comentar>
                  </EditPost>
              </CardStyle>
            )
          })}
        </ContainerCard>
      ):(<p>Loading</p>)
    }
    </>
  )
}

export default Card