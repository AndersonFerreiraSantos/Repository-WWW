import React from 'react';
import {Container} from './S_TestOfComponents'

//components
import C_Button from '../../components/buttons/default/C_Button';

const P_TestOfComponents = () => {
    return (
        <Container>
            <C_Button name={'teste'} onDoubleClick={()=> console.log('teste tamanho da escrita')}/>
        </Container>
    );
}

export default P_TestOfComponents