
import React, { useMemo, useContext } from 'react';
import { auth } from '../../database/firebase';
import { useTranslation } from "react-i18next";

import { Container, Left, Right } from './S_Header'
import { BUTTONS } from './M_Header';
import { contextUser } from '../../util/Contexts';

import C_Button from '../../components/buttons/default/C_Button'
import C_Button_Icon from '../../components/buttons/icon/C_Button_Icon'
import C_Menu_Config from '../../components/menus/config/C_Menu_Config';

const P_Header = ({ }) => {

    const { t } = useTranslation();

    const teste =() => {
        return(
           <></>
        )
    }

    const { user, logged } = useContext(contextUser);
    return (
        <Container>
             <C_Menu_Config />
            <Left logged={logged} >
                {!logged ?
                    BUTTONS.OF_LEFT.map((button, key) => {
                        return (
                            <C_Button name={button.name} onClick={button.onClick} />
                        )
                    })
                    :
                    undefined}
            </Left>
            <Right logged={logged} >
                {!logged ?
                    BUTTONS.OF_RIGHT.map((button, key) => {
                        return (
                            <C_Button  name={button.name} onClick={button.onClick} />
                        )
                    })
                    :
                    <C_Button_Icon style={{ marginRight: '10px'}} image={user.photoURL} onClick={() => teste()} />
                }
            </Right>
        </Container>
    )
}

export default P_Header