import { Icon, Image} from './S_Button_Icon'
import React from 'react'

const C_Button_Icon = ({icon, image, onClick, onDoubleClick, style}) => {
    return(
        <>
            {icon ? <Icon className="material-icons" onClick={onClick} onDoubleClick={onDoubleClick} style={style} > {icon} </Icon> 
            : <Image className="material-icons" onClick={onClick} onDoubleClick={onDoubleClick} src={image} style={style} /> }
        </>
    )
}
export default C_Button_Icon