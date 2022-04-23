import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 800px;

    .menu-esquerdo{
        display: flex;
        background-color: rgb(245, 245, 245);
        flex: 1;
        height: 800px;
        max-width: 225px;

        ul {
            list-style-type: none;
            margin: 0px;
            padding: 0px;
            width: 225px;
        }
    }
`;