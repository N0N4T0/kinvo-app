import styled from "styled-components"


export const Menu = styled.div`
    display: flex;
    height: 65px;
    margin: 30px 25px 0 0px;
    flex-direction: row;
`;

export const MenuItens = styled.div`
    display: flex;
    flex: 1;

    & + div {
        margin: 0 0 0 12px;
    }
`;

export const MenuItensTitle = styled.div`
    display: flex;
    align-items: center;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: #707B81;
    flex: 1;
    background-color: #F5F5F5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
    font-size: 1rem;
    padding: 0 60px 0 20px;
`;

export const Categories = styled.div`
    display: flex;
    flex: 1;
    background-color: #F5F5F5;
    margin: 0 25px 0 0;
    /* margin-left: 20px; */
    flex-direction: column;
`;

export const CategoriesInformations = styled.div`
    display: flex;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    height: 75px;
    margin-top: 16px;
`;

export const CategoriesItem = styled.div`
    display: flex;
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
    background-color: white;
    border-radius: 10px;
    flex-direction: column;
`;

export const CategoriesTitle = styled.div`
    display: flex;
    flex: 1;
    color: gray;
    font-size: 10px;
    align-items: flex-end;
    justify-content: center;
`;

export const CategoriesValue = styled.div`
    display: flex;
    flex: 1;
    color: gray;
    font-size: 18px;
    align-items: flex-start;
    justify-content: center;
`;