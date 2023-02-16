import styled from 'styled-components'

export const Body = styled.div`
    left: ${(props) => props.showMenuLateral ? '180px' : 0};
    position: fixed;
    transition: 1s;
    z-index: 1;
    top: 40px;
`

