import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import fa from './fa.js';

i18n
    // .use(LanguageDetector)
    .init({
        lng: 'fa',
        resources: {
            fa: {
                translations: fa
            }
        },
        fallbackLng: 'fa',
        debug: false,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;
export const t = (key, opt) => i18n.t(key, opt)