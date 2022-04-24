import LineVerticalImg from '../../assets/icones/linha1.png'

import { 
    BalanceInfo,
    Categories,
    Company, 
    Container, 
    DataContainer, 
    DataItem, 
    Line, 
    PriceInfo, 
    QuantityInfo, 
    QuotationInfo, 
    Search, 
    SearchContainer, 
    Title,
    TitleItem,
    Value,
    WalletInfo,
    Yield1Info,
    Yield2Info
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
            
            <DataContainer>
                <DataItem>
                    
                    <Company>
                        <img src={LineVerticalImg} id="linha-vertical"/>
                        ABEV3 - AMBEV
                    </Company>

                    <BalanceInfo>
                        <TitleItem>
                            SALDO ATUAL
                        </TitleItem>
                        <Value>
                            R$ 1980,00
                        </Value>
                    </BalanceInfo>
                    
                    <QuantityInfo>
                        <TitleItem>
                            QUANT.
                        </TitleItem>
                        <Value>
                            100
                        </Value>
                    </QuantityInfo> 

                    <PriceInfo>
                        <TitleItem>
                            PREÇO MÉDIO
                        </TitleItem>
                        <Value>
                            R$ 19,80
                        </Value>
                    </PriceInfo> 

                    <QuotationInfo>
                        <TitleItem>
                            ULTIMA COTAÇÃO
                        </TitleItem>
                        <Value>
                            R$ 20,06
                        </Value>
                    </QuotationInfo> 

                    <Yield1Info>
                        <TitleItem>
                            YIELD (1M)
                        </TitleItem>
                        <Value>
                            2,31 %
                        </Value>
                    </Yield1Info>

                    <Yield2Info>
                        <TitleItem>
                            YIELD (12M)
                        </TitleItem>
                        <Value>
                            12,31 %
                        </Value>
                    </Yield2Info> 

                    <WalletInfo>
                        <TitleItem>
                            % CARTEIRA
                        </TitleItem>
                        <Value>
                            12,31 %
                        </Value>
                    </WalletInfo>   

                </DataItem> 
                <Line/>  
                
                {/* <div className="lista-web-info">
                    <div className="lista-item" id="nome">
                        <img src="./imagens/icones/linha1.png" id="linha-vertical"/>
                        ABEV3 - AMBEV
                    </div>
                    <div className="lista-item" id="saldoAtual">
                        <div className="lista-item1">
                            SALDO ATUAL
                        </div>
                        <div className="lista-item2">
                            R$ 1980,00
                        </div>
                    </div>  
                    <div className="lista-item" id="quant">
                        <div className="lista-item1">
                            QUANT.
                        </div>
                        <div className="lista-item2">
                            100
                        </div>
                    </div>  
                    <div className="lista-item" id="precoMedio">
                        <div className="lista-item1">
                            PREÇO MÉDIO
                        </div>
                        <div className="lista-item2">
                            R$ 19,80
                        </div>
                    </div>  
                    <div className="lista-item" id="ultimaCotacao">
                        <div className="lista-item1">
                            ULTIMA COTAÇÃO
                        </div>
                        <div className="lista-item2">
                            R$ 20,06
                        </div>
                    </div>  
                    <div className="lista-item" id="yield1">
                        <div className="lista-item1">
                            YIELD (1M)
                        </div>
                        <div className="lista-item2">
                            2,31 %
                        </div>
                    </div>
                    <div className="lista-item" id="yield2">
                        <div className="lista-item1">
                            YIELD (12M)
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>  
                    <div className="lista-item" id="carteira">
                        <div className="lista-item1">
                            % CARTEIRA
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>                              
                </div> 
                <div className="linha"></div>

                <div className="lista-web-info">
                    <div className="lista-item" id="nome">
                        <img src="./imagens/icones/linha1.png" id="linha-vertical"/>
                        ABEV3 - AMBEV
                    </div>
                    <div className="lista-item" id="saldoAtual">
                        <div className="lista-item1">
                            SALDO ATUAL
                        </div>
                        <div className="lista-item2">
                            R$ 1980,00
                        </div>
                    </div>  
                    <div className="lista-item" id="quant">
                        <div className="lista-item1">
                            QUANT.
                        </div>
                        <div className="lista-item2">
                            100
                        </div>
                    </div>  
                    <div className="lista-item" id="precoMedio">
                        <div className="lista-item1">
                            PREÇO MÉDIO
                        </div>
                        <div className="lista-item2">
                            R$ 19,80
                        </div>
                    </div>  
                    <div className="lista-item" id="ultimaCotacao">
                        <div className="lista-item1">
                            ULTIMA COTAÇÃO
                        </div>
                        <div className="lista-item2">
                            R$ 20,06
                        </div>
                    </div>  
                    <div className="lista-item" id="yield1">
                        <div className="lista-item1">
                            YIELD (1M)
                        </div>
                        <div className="lista-item2">
                            2,31 %
                        </div>
                    </div>
                    <div className="lista-item" id="yield2">
                        <div className="lista-item1">
                            YIELD (12M)
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>  
                    <div className="lista-item" id="carteira">
                        <div className="lista-item1">
                            % CARTEIRA
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>                              
                </div> 
                <div className="linha"></div>

                <div className="lista-web-info">
                    <div className="lista-item" id="nome">
                        <img src="./imagens/icones/linha1.png" id="linha-vertical"/>
                        ABEV3 - AMBEV
                    </div>
                    <div className="lista-item" id="saldoAtual">
                        <div className="lista-item1">
                            SALDO ATUAL
                        </div>
                        <div className="lista-item2">
                            R$ 1980,00
                        </div>
                    </div>  
                    <div className="lista-item" id="quant">
                        <div className="lista-item1">
                            QUANT.
                        </div>
                        <div className="lista-item2">
                            100
                        </div>
                    </div>  
                    <div className="lista-item" id="precoMedio">
                        <div className="lista-item1">
                            PREÇO MÉDIO
                        </div>
                        <div className="lista-item2">
                            R$ 19,80
                        </div>
                    </div>  
                    <div className="lista-item" id="ultimaCotacao">
                        <div className="lista-item1">
                            ULTIMA COTAÇÃO
                        </div>
                        <div className="lista-item2">
                            R$ 20,06
                        </div>
                    </div>  
                    <div className="lista-item" id="yield1">
                        <div className="lista-item1">
                            YIELD (1M)
                        </div>
                        <div className="lista-item2">
                            2,31 %
                        </div>
                    </div>
                    <div className="lista-item" id="yield2">
                        <div className="lista-item1">
                            YIELD (12M)
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>  
                    <div className="lista-item" id="carteira">
                        <div className="lista-item1">
                            % CARTEIRA
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>                              
                </div> 
                <div className="linha"></div>    
                
                <div className="lista-web-info">
                    <div className="lista-item" id="nome">
                        <img src="./imagens/icones/linha1.png" id="linha-vertical"/>
                        ABEV3 - AMBEV
                    </div>
                    <div className="lista-item" id="saldoAtual">
                        <div className="lista-item1">
                            SALDO ATUAL
                        </div>
                        <div className="lista-item2">
                            R$ 1980,00
                        </div>
                    </div>  
                    <div className="lista-item" id="quant">
                        <div className="lista-item1">
                            QUANT.
                        </div>
                        <div className="lista-item2">
                            100
                        </div>
                    </div>  
                    <div className="lista-item" id="precoMedio">
                        <div className="lista-item1">
                            PREÇO MÉDIO
                        </div>
                        <div className="lista-item2">
                            R$ 19,80
                        </div>
                    </div>  
                    <div className="lista-item" id="ultimaCotacao">
                        <div className="lista-item1">
                            ULTIMA COTAÇÃO
                        </div>
                        <div className="lista-item2">
                            R$ 20,06
                        </div>
                    </div>  
                    <div className="lista-item" id="yield1">
                        <div className="lista-item1">
                            YIELD (1M)
                        </div>
                        <div className="lista-item2">
                            2,31 %
                        </div>
                    </div>
                    <div className="lista-item" id="yield2">
                        <div className="lista-item1">
                            YIELD (12M)
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>  
                    <div className="lista-item" id="carteira">
                        <div className="lista-item1">
                            % CARTEIRA
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>                              
                </div> 
                <div className="linha"></div>

                <div className="lista-web-info">
                    <div className="lista-item" id="nome">
                        <img src="./imagens/icones/linha1.png" id="linha-vertical"/>
                        ABEV3 - AMBEV
                    </div>
                    <div className="lista-item" id="saldoAtual">
                        <div className="lista-item1">
                            SALDO ATUAL
                        </div>
                        <div className="lista-item2">
                            R$ 1980,00
                        </div>
                    </div>  
                    <div className="lista-item" id="quant">
                        <div className="lista-item1">
                            QUANT.
                        </div>
                        <div className="lista-item2">
                            100
                        </div>
                    </div>  
                    <div className="lista-item" id="precoMedio">
                        <div className="lista-item1">
                            PREÇO MÉDIO
                        </div>
                        <div className="lista-item2">
                            R$ 19,80
                        </div>
                    </div>  
                    <div className="lista-item" id="ultimaCotacao">
                        <div className="lista-item1">
                            ULTIMA COTAÇÃO
                        </div>
                        <div className="lista-item2">
                            R$ 20,06
                        </div>
                    </div>  
                    <div className="lista-item" id="yield1">
                        <div className="lista-item1">
                            YIELD (1M)
                        </div>
                        <div className="lista-item2">
                            2,31 %
                        </div>
                    </div>
                    <div className="lista-item" id="yield2">
                        <div className="lista-item1">
                            YIELD (12M)
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>  
                    <div className="lista-item" id="carteira">
                        <div className="lista-item1">
                            % CARTEIRA
                        </div>
                        <div className="lista-item2">
                            12,31 %
                        </div>
                    </div>                              
                </div> 
                <div className="linha"></div> */}
            
            </DataContainer>

        </Container>
    )
}