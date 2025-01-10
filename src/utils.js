import { LANG } from './constants.js';

export const getMessage = (key, lang) => LANG.messages[lang]?.[key] || LANG.messages[LANG.default]?.[key] || '';