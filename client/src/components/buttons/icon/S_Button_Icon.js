import styled from 'styled-components'

export const Icon = styled.button`
    display: flex;
    font-size: 30px;
    transition: 1s;
    transform:${(props) => props.show ? 'scaleX(-1)' : undefined};
`

export const Image = styled.img`
    border-style: solid;
    border-radius: 50%;
    border-width: 2px;
    width: 30px;
`