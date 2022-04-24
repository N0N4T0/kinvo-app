import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 800px;
`;

export const InfoLeft = styled.div`
    display: flex;
    background: rgb(245, 245, 245);
    flex: 1;
    max-width: 225px;

    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        width: 225px;
    }
`;

export const InfoRight = styled.div`
    display: flex;
    flex: 1;
    background-color: #DAE0E3;
    flex-direction: column;
`;

export const InfoRightTitle = styled.div`
    margin: 30px 0 0 20px;
    font-size: 1.5rem;
    
    color: var(--cor008);
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
`;

export const Data = styled.div`
    display: flex;
    flex: 1;
    background-color: #F5F5F5;
    flex-direction: column;
    margin: 0 25px 0 20px;
    padding: 0 14px;
`;