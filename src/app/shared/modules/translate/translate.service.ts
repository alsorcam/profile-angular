import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from './translations';
import { Properties } from './../../utils/properties';
import * as moment from 'moment';

@Injectable()
export class TranslateService {
    private _currentLang: string;

    // inject our translations
    constructor( @Inject(TRANSLATIONS) private _translations: any) {}

    public get currentLang() {
        return this._currentLang;
    }

    public instant(key: string) {
        return this.translate(key);
    }

    public instantEnglish(key: string) {
        return this.translateEnglish(key);
    }

    public use(lang: string): void {
        // If the language is not part of the language dictionary, use English (en) as default language
        if (!Object.keys(this._translations).find(item => item === lang)) {
            lang = Properties.DEFAULT_APPLICATION_LANGUAGE;
        }
        this._currentLang = lang;
    }

    private translate(key: string): string {
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        } else {
            // by default translate in english if we dont have the translation
            return this._translations[Properties.DEFAULT_APPLICATION_LANGUAGE][key];
        }
    }

    private translateEnglish(key: string): string {
        return this._translations[Properties.DEFAULT_APPLICATION_LANGUAGE][key];
    }
}
