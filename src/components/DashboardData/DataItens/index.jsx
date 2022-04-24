import LineVerticalImg from '../../../assets/icones/linha1.png'

import { 
    BalanceInfo,
    Company, 
    DataContainer, 
    DataItem, 
    Line, 
    PriceInfo, 
    QuantityInfo, 
    QuotationInfo, 
    TitleItem,
    Value,
    WalletInfo,
    Yield1Info,
    Yield2Info
 } from "./styles";


export function DataItens(){
    return(
        <DataContainer>
            <DataItem>
                
                <Company>
                    <img src={LineVerticalImg}/>
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
        </DataContainer>
    )
}