import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex: 1;
    /* margin:0 30px; */
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
        background-image: url("./../../assets/icones/linha1.png");
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