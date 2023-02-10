import {Container} from './S_TestOfComponents';
import { useTranslation } from "react-i18next";
import React, { memo } from 'react';
//components
import C_Button from '../../components/buttons/default/C_Button';

const P_TestOfComponents = () => {

    const  { t } = useTranslation();
    
    return (
        <Container>
            <C_Button name={t('home')} onDoubleClick={()=> console.log('teste tamanho da escrita')}/>
        </Container>
    );
}

export default memo(P_TestOfComponents)