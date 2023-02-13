import { FiChevronRight, FiX } from "react-icons/fi";
import {Icon} from './S_Icon'

export const C_Icon = ({icon}) => {

    const ICONS = {
        FiChevronRight: <FiChevronRight />,
        FiX: <FiX />
    }

    return(
        <Icon > {ICONS[icon]} </Icon>
    )
}