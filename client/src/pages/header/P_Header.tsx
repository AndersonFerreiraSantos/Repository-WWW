import React from 'react'
import { Container, Left, Right } from './S_Header'
import C_Button from '../../components/buttons/default/C_Button'

const P_Header = ({}) => {
    return(
        <Container>
            <Left>
                <C_Button onClick={() => console.log('B1')} name={'button 1'} />
                <C_Button onClick={() => console.log('B2')} name={'button 2'} />
            </Left>
            <Right>
            </Right>
        </Container>
    )
}

export default P_Header