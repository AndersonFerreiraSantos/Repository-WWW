import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    position: fixed;
    transition: 10s;
    color: white;
    height: auto;
    width: auto;
    z-index: 5;
    right: 0;
    top: 5%;
    display:${(props) => props.show ? undefined : 'none'};
`

export const Itens = styled.ul`
    flex-direction: column;
    display: flex;
`

export const Item = styled.button`
    background-color: blue;
    justify-content: end;
    align-items: center;
    padding-right: 5px;
    padding-left: 20px;
    display: flex;
    height: 30px;
    width: 100%;

    &:hover {
        background-color: yellow;
    }
`