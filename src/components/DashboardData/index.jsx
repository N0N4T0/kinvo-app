import { DataItens } from './DataItens';

import { 
    Categories,
    Container, 
    Search, 
    SearchContainer, 
    Title,
 } from "./styles";


export function DashboardData(){
    return(
        <Container>
            <Categories>
                <Title>
                    <b>Fundos</b>
                </Title>
                <SearchContainer>
                    <Search>
                        <input type="text" name="pesquisar"/>
                    </Search>
                </SearchContainer>
            </Categories>
      
            <DataItens/>
            <DataItens/>
        </Container>
    )
}