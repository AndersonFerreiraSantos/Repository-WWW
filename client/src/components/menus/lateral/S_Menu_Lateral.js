import styled from 'styled-components'

export const Container = styled.div`
    left:${(props) => props.show ? 0 : '-180px'};
    background-color: black;
    position: fixed;
    transition: 1s;
    color: white;
    height: 92%;
    width: 180px;
    z-index: 5;
    top: 5%;
`

export const Itens = styled.div`
    flex-direction: column;
    display: flex;
`

export const Item = styled.button`
    justify-content: space-between;
    background-color: blue;
    align-items: center;
    padding-right: 1px;
    padding-left: 20px;
    display: flex;
    height: 30px;
    width: 100%;

    &:hover {
        background-color: yellow;
    }
`