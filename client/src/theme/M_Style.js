import { TYPE_THEME } from '../config/user'
import { TYPES_THEME } from '../config/system'

export const THEME = {
    TYPE_THEME: TYPE_THEME,
    
    [TYPES_THEME.DEFAULT]:{
        S_COMPONENT:{
            backgroundColor: 'white',
            color: 'black',
        },
    },
    [TYPES_THEME.DARK]:{
        S_COMPONENT:{
            backgroundColor: 'black',
            color: 'white',
        },
    }
}
