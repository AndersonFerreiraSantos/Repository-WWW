import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt_br from './locales/pt/pt-br.json'
import en_us from './locales/en/en-us.json'

const resources = {
    pt_br,
    en_us
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt_br",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;