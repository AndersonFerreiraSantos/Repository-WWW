import React, { useMemo, useContext, useState } from 'react';
import { Container } from './S_Home'
import { contextUser } from '../../util/Contexts';

import C_Menu_Lateral from '../../components/menus/lateral/C_Menu_Lateral'

const P_Home = ({}) => {

    const { logged } = useContext(contextUser);

    return (
        <Container>
           
        </Container>
    )
}

export default P_Home;