import { Left } from "../components/Menu/Left";
import { Top } from "../components/Menu/Top";

import { Container } from "./styles";

export function Dashboard(){
    return (
        <>
            <Top/>
            <Container>
                <div className="menu-esquerdo">
                    <ul>
                        <Left/>
                        <Left/>
                        <Left/>
                        <Left/>
                    </ul>
                </div>
                <h1>Hello World</h1>
            </Container>
        </>
    )
}