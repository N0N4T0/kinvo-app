import { Categories, CategoriesInformations, CategoriesItem, CategoriesTitle, CategoriesValue, Menu, MenuItens, MenuItensTitle } from "./styles"

export function Right(){
    return(
        <>
            <Menu>
                <MenuItens>
                   <MenuItensTitle>
                        Ações
                   </MenuItensTitle>                  
                </MenuItens>
                {/* <MenuItens>
                    <MenuItensTitle>
                        Nome da Classe
                   </MenuItensTitle>
                </MenuItens> */}
            </Menu>

            <Categories>
                <CategoriesInformations>
                    <CategoriesItem>
                        <CategoriesTitle>
                            SALDO BRUTO
                        </CategoriesTitle>
                        <CategoriesValue>
                            <b>R$ 12.709,14</b>
                        </CategoriesValue>
                    </CategoriesItem>
                    <CategoriesItem>
                         <CategoriesTitle>
                            VALOR APLICADO
                        </CategoriesTitle>
                        <CategoriesValue>
                            <b>R$ 10.023,12</b>
                        </CategoriesValue>
                    </CategoriesItem>
                    <CategoriesItem>
                         <CategoriesTitle>
                            GANHO DE CAPITAL
                        </CategoriesTitle>
                        <CategoriesValue>
                            <b>R$ 2.686,01</b>
                        </CategoriesValue>
                    </CategoriesItem>
                    <CategoriesItem>
                        <CategoriesTitle>
                            TOTAL DISTRIBUIDOS
                        </CategoriesTitle>
                        <CategoriesValue>
                            <b>R$ 800,00</b>
                        </CategoriesValue>
                    </CategoriesItem>
                    <CategoriesItem>
                         <CategoriesTitle>
                            YIELD
                        </CategoriesTitle>
                        <CategoriesValue>
                            <b>15 %</b>
                        </CategoriesValue>
                    </CategoriesItem>
                </CategoriesInformations>
            </Categories>
        </>
    )
}