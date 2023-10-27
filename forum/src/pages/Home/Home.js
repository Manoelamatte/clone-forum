
import Card from "../../componentes/Card/Card";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Historicos from "../../componentes/Historicos/Historicos";
import Menu from "../../componentes/Menu/Menu";

import { SectionStyle } from "./style";



function Home() {


  


    return (
        <>
            <HeaderPerfil
             titulo={'Questions'}
             />

            <SectionStyle>
                <Menu />
                <Card />

                <Historicos />

            </SectionStyle>

        </>
    )
}


export default Home