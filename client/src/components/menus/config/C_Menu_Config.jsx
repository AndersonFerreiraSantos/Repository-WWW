import React from "react";
import { Container, Itens, Item } from "./S_Menu_Config";
import { C_Icon } from "../../icon/C_Icon";
import { useTranslation } from "react-i18next";

const C_Menu_Config = ({show, items}) => {
    const { t } = useTranslation();
    return (
        <Container show={show}>
            <Itens>
                {
                    items?.map((item, key) => {
                        return <Item key={key} onClick={item.onClick} >{t(item.text)}<C_Icon icon={item.icon} /></Item>
                    })
                }

            </Itens>
        </Container>
    )
}

export default C_Menu_Config;