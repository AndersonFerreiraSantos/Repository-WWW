import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    position: fixed;
    color: white;
    height: auto;
    width: 150px;
    z-index: 5;
    right: 0;
    top: 40px;
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