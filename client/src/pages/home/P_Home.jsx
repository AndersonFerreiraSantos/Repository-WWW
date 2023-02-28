import React, { useMemo, useContext, useState } from 'react';
import { Container, Section } from './S_Home'
import { contextUser } from '../../util/Contexts';

import C_Menu_Lateral from '../../components/menus/lateral/C_Menu_Lateral'

const P_Home = ({}) => {

    const { logged } = useContext(contextUser);

    return (
        <Container>
            <div style={{justifyContent: 'space-between', backgroundColor: 'white', width: '90% -180px'}}>
                <Section >
                    <h1>teste</h1>
                </Section>
                <Section >
                    
                </Section>
                <Section >
                    
                </Section>
            </div>
            <div style={{width: '180px', backgroundColor:'black'}}></div> 
        </Container>
           )
}

export default P_Home;