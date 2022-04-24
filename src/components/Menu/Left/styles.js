import styled from "styled-components"


export const Container = styled.li`
    height: 60px;
    border-bottom: 1px solid var(--cor007);

    &:last-child{
        border: 0;
    }
    
    display: flex;
    align-items: center;
    
    margin: 0 0 0 0;
    padding: 0 0 0 0.6rem;

    cursor: pointer;
    
    background: var(--cor006);

    &:hover{
        background: var(--cor003);

       div:first-of-type{
           background: var(--cor011);
       }
    }
`;

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
        
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: var(--cor003);
`;

export const MenuInformations = styled.div`
    width: 120px;
    font-size: 14px;
    padding-left: 1rem;

    display: flex;
    font-family: Helvetica, Arial, sans-serif;
    flex-direction: column;
    
    color: #707B81;
`;