
import React, { useMemo, useContext, useState } from 'react';
import { auth } from '../../database/firebase';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Container, Left, Right, Config, Menu } from './S_Header';
import { BUTTONS, CONFIG_LIST, MENU_LIST } from './M_Header';
import { contextUser } from '../../util/Contexts';

import C_Button_Icon from '../../components/buttons/icon/C_Button_Icon';
import C_Menu_Config from '../../components/menus/config/C_Menu_Config';
import C_Button from '../../components/buttons/default/C_Button';
import C_Menu_Lateral from '../../components/menus/lateral/C_Menu_Lateral';

const P_Header = ({}) => {

    const [showConfig, setShowConfig] = useState(false);
    const [showMenuLateral, setShowMenuLateral] = useState(false);
    const { user, logged } = useContext(contextUser);
    const { t } = useTranslation();
    
    return (
        <Container>
            {logged ?
            <Menu logged={logged} show={showMenuLateral} >
                <C_Button_Icon show={showMenuLateral} icon={'FiChevronRight'} onClick={() => setShowMenuLateral( showMenuLateral === false ? true : false )} />
            </Menu> : undefined }
            <Left logged={logged} show={showMenuLateral} >
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
                    <C_Button_Icon image={user.photoURL} onClick={() => setShowConfig( showConfig === false ? true : false )} />
                }
            </Right>
            <C_Menu_Config show={showConfig} items={CONFIG_LIST} />
            <C_Menu_Lateral show={showMenuLateral} items={MENU_LIST} />
        </Container>
    )
}

export default P_Header;