import heroImg from '../assets/hero.jpg';
import { Container, DivContent, DivImg } from './style';




export function Conteudo(props) {
    return (
        <Container>
            <DivContent>
                <h1>Adivinhação da carta pensada!!!</h1>
                <p>Click no botão abaixo para ver esse incrivel truque de magica!!!</p>
                <button onClick={props.handle}>Click aqui!!!</button>
            </DivContent>
            <DivImg>
                <img src={heroImg} alt="" />
            </DivImg>
        </Container>
    )
}