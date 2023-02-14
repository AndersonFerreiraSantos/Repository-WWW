import styled from 'styled-components'

export const Container = styled.header`
    justify-content: space-between;
    background-color: yellow;
    position: fixed;
    display: flex;
    z-index: 10;
    width: 100%;
    height: 5%;
    top:0;
    align-items: center;

`


export const Menu = styled.div`
    width: ${(props) => { if (props.logged && props.show) { return '180px' } else if (props.logged) { return '30px' } }};
    background-color: orange;
    flex-direction: row;
    align-items: center;
    justify-content:end;
    transition: 1s;
    display: flex;
`

export const Mid = styled.div`
    background-color: 'white';
    display: contents;
`
// style={{backgroundColor: 'white', display: 'contents'}}

export const Left = styled.div`
    justify-content: space-around;
    background-color: green;
    align-items: center;
    transition: 1s;
    /* width: ${(props) => { if (props.logged && props.show) { return '100%' } else if (props.logged) { return '100%' } else { return '70%' } }}; */
`
export const Right = styled.div`
    background-color: orange;
    justify-content: center;
    align-items: center;
    display: flex;
    width: ${(props) => props.logged ? '5%' : '30%'};
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