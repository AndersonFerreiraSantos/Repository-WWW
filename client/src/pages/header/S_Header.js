import styled from 'styled-components'

export const Container = styled.header`
    background-color: yellow;
    position: fixed;
    display: flex;
    width: 100%;
    height: 5%;
    top:0;
`
export const Left = styled.div`
    justify-content: space-evenly;
    background-color: green;
    flex-direction: row;
    align-items: center;
    position: relative;
    display: flex;
    width: ${(props) => props.logged ?  '95%' : '70%'};
`
export const Right = styled.div`
    justify-content: space-evenly;
    background-color: orange;
    flex-direction: row;
    align-items: center;
    position: relative;
    display: flex;
    width: ${(props) => props.logged ?  '5%' : '30%'};
`

export const GoogleWindow = styled.div`
    background-color: purple;
    width: 500px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
`