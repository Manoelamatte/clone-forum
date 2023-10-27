import { useEffect, useState } from "react";
import { createComment } from "../../services/requests";
import { AutorComentario, BotaoCondicional, ComentarioContainer, ComentarioDoAutor, ContainerCurtir, ContainerItem, InputComentar } from "./style";
import Curtir from "../Curtir/Curtir";


const Comentar = ({postId, comments, autorId}) => {

    const [novoComentario, setNovoComentario] = useState('')
    const [comentarios, setNovoComentarios] = useState([])
    const [mostrarComentarios, setMostrarcomentarios] = useState(false)

    const adicionarComentario = ()=>{
        if(novoComentario.trim() != ""){
            createComment(postId, novoComentario)
            setNovoComentarios(...comments, novoComentario)
            setNovoComentario('')
        }
    }

    useEffect(()=>{
        adicionarComentario()
    }, [])

    const NovoComentarios = comments.map((comentarios)=>{
        return(
            <ComentarioContainer key={comentarios.comments_id}>
                <AutorComentario>{comentarios.creator_name}</AutorComentario>
                <ComentarioDoAutor>{comentarios.comments}</ComentarioDoAutor>
            </ComentarioContainer>
        )
    })

    return (

        <>
            <ContainerItem>
                <BotaoCondicional onClick={()=> setMostrarcomentarios(
                    !mostrarComentarios)}> 
                    {mostrarComentarios ?('fechar'):
                    ('comentar')}
                </BotaoCondicional>

                {mostrarComentarios && (
                <ContainerCurtir>
                        <div>
                            <InputComentar
                                placeholder="comentário"
                                value={novoComentario}
                                onChange={(e)=> setNovoComentario(e.target.value)}
                            />
                        </div>

                        [NovoComentarios]
                </ContainerCurtir>)}

                <Curtir autorId={autorId}/>
            </ContainerItem>            
        </>
    )
}

export default Comentar