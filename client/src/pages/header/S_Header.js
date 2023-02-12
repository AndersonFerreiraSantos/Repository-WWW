import styled from 'styled-components'

export const Container = styled.header`
    background-color: yellow;
    position: fixed;
    display: flex;
    z-index: 10;
    width: 100%;
    height: 5%;
    top:0;
    
`
export const Left = styled.div`
    justify-content: 'space-evenly';
    background-color: green;
    align-items: center;
    transition: 1s;
    display: flex;
    width: ${(props) => { if(props.logged && props.show){return '75%'}else if(props.logged){return '90%'}else{'70%'} }};
`
export const Right = styled.div`
    background-color: orange;
    justify-content: center;
    align-items: center;
    display: flex;
    width: ${(props) => props.logged ? '5%' : '30%'};
`
export const Menu = styled.div`
    justify-content: ${ (props) => { if(props.logged && props.show){return 'end'}else if(props.logged){return 'space-evenly'}}};
    width: ${(props) => { if(props.logged && props.show){return '20%'}else if(props.logged){return '5%'} }};
    background-color: orange;
    flex-direction: row;
    align-items: center;
    transition: 1s;
    display: flex;
`

export const GoogleWindow = styled.div`
    background-color: purple;
    width: 500px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
`

export const Config = styled.div`

`