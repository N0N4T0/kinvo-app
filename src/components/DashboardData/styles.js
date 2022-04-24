import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex: 1;
    margin-right: 16px;
    margin-left: 16px;
    background-color: white;
    border-radius: 10px;
    flex-direction: column;
`;

export const Categories = styled.div`
    display: flex;
    padding-top: 13px;
    margin-bottom: 20px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    font-size: 18px;
    font-family: Helvetica, Arial, sans-serif;
    color: #707B81;
    padding-left: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    input{
        width: 215px;
        background-image: url("../imagens/icones/lupa1.png");
        background-position: 10px;
        background-repeat: no-repeat;
        background-color: #EEF2F4;
        border: 0;
        border-radius: 15px;
        margin-right: 20px;
        height: 25px;
        padding-left: 35px;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 15px;
    }
`;


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
    background-color: rgb(186, 195, 201);
    margin-right: 26px;
    height: 1px;
    margin-left: 20px;
    margin-bottom: 10px;

    font-size: 12px;
    font-family: Helvetica, Arial, sans-serif;
    color: #4C309B;
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
    margin-right: 26px;
    height: 2px;
    margin-left: 20px;
    margin-bottom: 10px;
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

