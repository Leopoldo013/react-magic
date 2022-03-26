import { Container, DivCartas, DivButtons } from "./style";
import imgUm from '../assets/1.png';
import imgDois from '../assets/2.png';
import imgTres from '../assets/3.png';
import imgQuatro from '../assets/4.png';
import imgCinco from '../assets/5.png';
import imgSeis from '../assets/6.png';
import imgSete from '../assets/7.png';
import imgOito from '../assets/8.png';
import imgNove from '../assets/9.png';
import imgDez from '../assets/10.png';
import imgOnze from '../assets/11.png';
import { useState } from "react";

export function Inicia(props) {

    const [prosseguir, setProsseguir] = useState(false)

    const handleProsseguir = () => {
        setProsseguir(true)
    }

    if (prosseguir) {
        return (
            <Container>
                <hr />
                <h2>Veja retiramos apenas a carta que vc pensou!!!</h2>

                <DivCartas>
                    <img src={imgSete} alt="" />
                    <img src={imgNove} alt="" />

                    <img src={imgDez} alt="" />
                    <img src={imgOito} alt="" />


                    <img src={imgOnze} alt="" />

                </DivCartas>
                <h2>Incrivel não!!!! Click no botão voltar para brincar mais uma vez, 
                    ou click no botão acima do lado direito (outros projetos) para conhecer melhor nosso trabalho.</h2>
                <DivButtons>
                    <button onClick={props.handle}>Voltar</button>

                </DivButtons>
            </Container>
        )

    } else {

        return (
            <Container>
                <hr />
                <h2>Olha para as cartas abaixo e memorize uma delas.</h2>

                <DivCartas>
                    <img src={imgUm} alt="" />
                    <img src={imgDois} alt="" />
                    <img src={imgTres} alt="" />
                    <img src={imgQuatro} alt="" />
                    <img src={imgCinco} alt="" />
                    <img src={imgSeis} alt="" />

                </DivCartas>
                <h2>Depois que memorizar uma das cartas, click no botão prosseguir</h2>
                <DivButtons>
                    <button onClick={props.handle}>Voltar</button>
                    <button onClick={handleProsseguir}>Prosseguir</button>
                </DivButtons>
            </Container>
        )
    }
}