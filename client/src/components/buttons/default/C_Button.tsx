"use strict"
import { Container } from './S_Button'

interface props {
    name: string | number,
    onClick?: Function,
    onDoubleClick?: Function,
}
const C_Button = (props:props) => {
    return (
        <Container onClick={props.onClick} onDoubleClick={props.onDoubleClick} >
            {props.name}
        </Container>
    )
}

export default C_Button