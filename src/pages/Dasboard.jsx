import clockImg from '../assets/icones/relogio1.png'
import squaresImg from '../assets/icones/quadrados1.png'
import moneyImg from '../assets/icones/dinheiro1.png'
import symbolImg from '../assets/icones/simbolo1.png'
import diamondImg from '../assets/icones/diamante1.png'
import projectionImg from '../assets/icones/projecao1.png'
import circleImg from '../assets/icones/circulo1.png'
import lockerImg from '../assets/icones/cadeado1.png'

import { Top } from "../components/Menu/Top"
import { Left } from "../components/Menu/Left"
import { Right } from '../components/Menu/Right'

import { Container, InfoLeft, InfoRight, InfoRightTitle } from "./styles"

export function Dashboard(){
    return (
        <>
            <Top/>
            <Container>
                <InfoLeft>
                    <ul>
                        <Left
                            src={clockImg}
                            alt="Imagem de Relógio"
                        >
                            Resumo da Carteira
                        </Left>
                        <Left
                            src={squaresImg}
                            alt="Imagem de Quadrados"
                        >
                            Meus Produtos
                        </Left>
                        <Left
                            src={moneyImg}
                            alt="Imagem de Dinheiro"
                        >
                            Meus Proventos
                        </Left>
                        <Left
                            src={projectionImg}
                            alt="Imagem de Projeção"
                        >
                            Análise por Classe de Produto
                        </Left>
                        <Left
                            src={symbolImg}
                            alt="Imagem de Símbolo"
                        >
                            Rentabilidade Real
                        </Left>
                        <Left
                            src={diamondImg}
                            alt="Imagem de Diamante"
                        >
                            Projeção de Carteira
                        </Left>
                        <Left
                            src={circleImg}
                            alt="Imagem de Relógio"
                        >
                            Risco X Retorno
                        </Left>
                        <Left
                            src={lockerImg}
                            alt="Imagem de Cadeado"
                        >
                            Cobertura do FGC
                        </Left>
                    </ul>
                </InfoLeft>

                <InfoRight>
                    <InfoRightTitle>
                        Análise por Classe de Ativos
                        <Right/>
                    </InfoRightTitle>
                </InfoRight>
            </Container>
        </>
    )
}