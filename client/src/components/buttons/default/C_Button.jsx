import { Container } from './S_Button'
import React from 'react'

const C_Button = ({name, onClick, onDoubleClick}) => {
    return (
        <Container  onClick={onClick} onDoubleClick={onDoubleClick} >
            {name}
        </Container>
    )
}

export default C_Button