
import React, { useMemo, useContext, useState, useEffect } from 'react';
import { auth } from '../../database/firebase';
import { useNavigate } from "react-router-dom";

import { Container, Left, Right, Config, Menu, Mid } from './S_Header';
import { contextUser, contextConfig } from '../../util/Contexts';
import { BUTTONS, CONFIG_LIST, MENU_LIST } from './M_Header';

import C_Menu_Lateral from '../../components/menus/lateral/C_Menu_Lateral';
import C_Button_Icon from '../../components/buttons/icon/C_Button_Icon';
import C_Menu_Config from '../../components/menus/config/C_Menu_Config';
import C_Button from '../../components/buttons/default/C_Button';

const P_Header = ({}) => {

    const { user, logged } = useContext(contextUser);
    const [showConfig, setShowConfig] = useState(false);
    const { globalConfig, setGlobalConfig } = useContext(contextConfig);


    return (
        <Container>
            {logged ?
                <Menu logged={logged} show={globalConfig.showMenuLateral} >
                    <C_Button_Icon show={globalConfig.showMenuLateral} icon={'FiChevronRight'} onClick={() => setGlobalConfig(globalConfig => ({ ...globalConfig, showMenuLateral: globalConfig.showMenuLateral === true ? false : true }))} />
                </Menu> : undefined}
            {/* <Left logged={logged} show={showMenuLateral} > */}
            <Mid>
                {!logged ?
                    BUTTONS.OF_LEFT.map((button, key) => {
                        return (
                            <C_Button key={key} name={button.name} onClick={button.onClick} />
                        )
                    })
                    :
                    BUTTONS.ON_LEFT.map((button, key) => {
                        return (
                            <C_Button key={key} name={button.name} onClick={button.onClick} />
                        )
                    })
                }
            </Mid>

            <Right logged={logged} >
                {!logged ?
                    BUTTONS.OF_RIGHT.map((button, key) => {
                        return (
                            <C_Button key={key} name={button.name} onClick={button.onClick} />
                        );
                    })
                    :
                    <C_Button_Icon image={user.photoURL} onClick={() => setShowConfig(showConfig === false ? true : false)} />
                }
            </Right>
            <C_Menu_Config show={showConfig} items={CONFIG_LIST} />
            <C_Menu_Lateral show={globalConfig.showMenuLateral} items={MENU_LIST} />
        </Container>
    )
}

export default P_Header;