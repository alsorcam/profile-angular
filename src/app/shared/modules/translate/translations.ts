import { InjectionToken } from '@angular/core';

import { LANG_EN_TRANS } from './translations/lang-en';


// translation token
export let TRANSLATIONS = new InjectionToken('translations');

// all translations
const dictionary = {
    'en': LANG_EN_TRANS,
};

// providers
export let TRANSLATION_PROVIDER = [
    {
        provide: TRANSLATIONS,
        useValue: dictionary
    },
];
