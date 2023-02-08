import styled from 'styled-components'
import {THEME} from '../../../theme/M_Style'

export const Container = styled.button`
    background-color: ${THEME[THEME.TYPE_THEME].S_COMPONENT.backgroundColor};
    color: ${THEME[THEME.TYPE_THEME].S_COMPONENT.color};
    width: 120px;
    height: 30px;
    border-radius: 2px
`