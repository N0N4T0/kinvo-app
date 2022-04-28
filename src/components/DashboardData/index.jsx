import { DataItens } from './DataItens';

import { 
    Categories,
    Container, 
    Search, 
    SearchContainer, 
    Title,
    DataBox
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

            <DataBox>
                <DataItens/>
                <DataItens/>
                <DataItens/>
                <DataItens/>
                <DataItens/>
                <DataItens/>
                <DataItens/>
                <DataItens/>
                <DataItens/>
            </DataBox>

          
        </Container>
    )
}