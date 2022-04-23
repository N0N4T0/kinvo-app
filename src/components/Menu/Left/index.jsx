import clockImg from '../../../assets/icones/relogio1.png'
import arrowImg from '../../../assets/icones/flecha1.png'


import { Container, Icon, MenuInformations } from './styles'

export function Left(){
    return (
        <Container>
            <Icon>
                <img src={clockImg} alt="Clock image"/>
            </Icon>    
            <MenuInformations>
                Resumo  Da Carteira
            </MenuInformations>
            <div class="flecha">
                <img src={arrowImg} alt="Arrow Image"/>
            </div>
        </Container>
    ) 
}