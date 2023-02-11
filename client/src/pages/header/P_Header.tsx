import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useMemo, useContext } from 'react';
import { auth } from '../../database/firebase';
import { useTranslation } from "react-i18next";

import { Container, Left, Right } from './S_Header'
import { BUTTONS } from './M_Header';
import { contextUser } from '../../util/Contexts';

import C_Button from '../../components/buttons/default/C_Button'
import C_Button_Icon from '../../components/buttons/icon/C_Button_Icon'

const P_Header = ({}) => {

    const { t } = useTranslation();

    const { user, setUser } = useContext(contextUser);



    return (
        <Container>
            <Left >
                {!user?
                    BUTTONS.OF_LEFT.map(button => {
                        return (
                            <C_Button name={button.name} onClick={button.onClick} />
                        )
                    })
                :
                <><h1>{user.displayName}</h1> <img src={user.photoURL} /></> }
                </Left>
            <Right>
            {!user?
                    BUTTONS.OF_RIGHT.map(button => {
                        return (
                            <C_Button name={button.name} onClick={button.onClick} />
                        )
                    })
                :
                <C_Button_Icon />}
                 {/* <><h1>{user.displayName}</h1> <img src={user.photoURL} /></> } */}
                
            </Right>
        </Container>
    )
}

export default P_Header