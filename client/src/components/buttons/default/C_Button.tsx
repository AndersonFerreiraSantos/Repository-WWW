import { Container } from './S_Button'
interface props {
    name: any,
    key: number,
    onClick?: Function,
    onDoubleClick?: Function,
}
const C_Button = (props:props) => {
    return (
        <Container key={props.key} onClick={props.onClick} onDoubleClick={props.onDoubleClick} >
            {props.name}
        </Container>
    )
}

export default C_Button