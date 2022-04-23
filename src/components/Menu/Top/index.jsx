import logoImg from '../../../assets/logo.svg'
import premiumImg from '../../../assets/premium.png'

import {Container, Logo} from './styles'

export function Top(){
    return(
        <header>
            <Container>
                <Logo>
                    <img src={logoImg} alt="Logo" />
                    <img src={premiumImg} alt="Premium" />
                </Logo>
            </Container>
        </header>
    )
}