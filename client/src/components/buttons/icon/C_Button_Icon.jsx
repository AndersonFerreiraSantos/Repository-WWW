import React from 'react'
import { FiChevronRight, FiX } from "react-icons/fi";
import { Icon, Image } from './S_Button_Icon'

const C_Button_Icon = ({ show, icon, image, onClick, onDoubleClick, style }) => {

    const ICONS = {
        FiChevronRight: <FiChevronRight />,
        FiX: <FiX />
    }

    return (
        <>
            {icon ? <Icon show={show} onClick={onClick} onDoubleClick={onDoubleClick} style={style} >{ICONS[icon]}</Icon>
                : <Image className="material-icons" onClick={onClick} onDoubleClick={onDoubleClick} src={image} style={style} />}
        </>
    )
}
export default C_Button_Icon;