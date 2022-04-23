// import clockImg from '../../../assets/icones/relogio1.png'
import arrowImg from '../../../assets/icones/flecha1.png'

import { Container, Icon, MenuInformations } from './styles'

export function Left({ src, alt, children }) {
    return (
        <Container>
            <Icon>
                <img src={src} alt={alt} />
            </Icon>
            <MenuInformations>
                {children}
            </MenuInformations>
            <div className="flecha">
                <img src={arrowImg} alt="Arrow Image" />
            </div>
        </Container>
    )
}