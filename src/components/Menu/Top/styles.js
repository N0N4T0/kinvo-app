import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    height: 90px;
    width: 100%;
`;

export const Logo = styled.div`
    display: flex;
    margin-left: 30px;
    align-items: center;

    img + img {
        margin-top: 5px;
        padding-left: 2px;
    }
`;

