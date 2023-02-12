
import React, { useMemo, useContext, useState } from 'react';
import { auth } from '../../database/firebase';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"

import { Container, Left, Right, Config } from './S_Header';
import { BUTTONS, CONFIG_LIST } from './M_Header';
import { contextUser } from '../../util/Contexts';

import C_Button_Icon from '../../components/buttons/icon/C_Button_Icon';
import C_Menu_Config from '../../components/menus/config/C_Menu_Config';
import C_Button from '../../components/buttons/default/C_Button';

const P_Header = ({}) => {

    const { user, logged } = useContext(contextUser);
    const { t } = useTranslation();

    const [showConfig, setShowConfig] = useState(false)
    return (
        <Container>
            <Left logged={logged} >
                {!logged ?
                    BUTTONS.OF_LEFT.map((button, key) => {
                        console.log(key)
                        return (
                            <C_Button key={key} name={button.name} onClick={button.onClick} />
                        )
                    })
                    :
                    undefined}
            </Left>
            <Right logged={logged} >
                {!logged ?
                    BUTTONS.OF_RIGHT.map((button, key) => {
                        return (
                            <C_Button key={key} name={button.name} onClick={button.onClick} />
                        );
                    })
                    :
                    <C_Button_Icon style={{ marginRight: '10px' }} image={user.photoURL} onClick={() => setShowConfig( showConfig === false ? true : false )} />
                }
            </Right>
            <C_Menu_Config show={showConfig} items={CONFIG_LIST} />
        </Container>
    )
}

export default P_Header