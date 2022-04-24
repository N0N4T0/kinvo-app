import styled from 'styled-components'

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DataItem = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
`;

export const Company = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    flex: 1;

    font-size: 12px;
    font-family: Helvetica, Arial, sans-serif;
    color: #4C309B;

    img {
        padding: 0 10px 0 0;
    }
`;

export const BalanceInfo = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    flex: 2;
    flex-direction: column;
`;

export const QuantityInfo = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    
    flex: 1;
    flex-direction: column;
`;

export const PriceInfo = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    flex: 2;
    flex-direction: column;
`;

export const QuotationInfo = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    flex: 2;
    flex-direction: column;
`;

export const Yield1Info = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    flex: 1;
    flex-direction: column;
`;

export const Yield2Info = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    flex: 1;
    flex-direction: column;
`;

export const WalletInfo = styled.div`
    display: flex;
    height: 40px;
    align-items: center;

    flex: 1;
    flex-direction: column;
`;

export const Line = styled.div`
    background-color: rgb(186, 195, 201);
    margin: 5px 26px 15px 20px ;

    height: 1px;
`;


export const TitleItem = styled.div`
    flex: 1;
    
    width: 100%;
    font-size: 8px;
    font-family: Helvetica, Arial, sans-serif;
    color: #4C309B;
    text-align: center;
`;

export const Value = styled.div`
    flex: 1;
    width: 100%;
    font-size: 14px;
    font-family: Helvetica, Arial, sans-serif;
    color: #4C309B;
    font-weight: bold;
    text-align: center;
`;