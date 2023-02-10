import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useTranslation } from "react-i18next";
import { auth } from '../../database/firebase';
import C_Button from '../../components/buttons/default/C_Button'
import { Container, Left, Right } from './S_Header'
import React, { useMemo } from 'react';
const P_Header = ({ }) => {
    console.log('header')
    const { t } = useTranslation();

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(response => console.log(response))
    }

    return (

        <Container>
            <Left>
                <C_Button onClick={() => console.log('B1')} name={'button 1'} />
                <C_Button onClick={() => console.log('B2')} name={'button 2'} />
                <C_Button onClick={() => console.log('B3')} name={'button 3'} />
            </Left>
            <Right>
                <C_Button onClick={() => googleLogin()} name={t('login')} />
                <C_Button onClick={() => console.log('B3')} name={t('register')} />
            </Right>
        </Container>
    )
}

export default P_Header