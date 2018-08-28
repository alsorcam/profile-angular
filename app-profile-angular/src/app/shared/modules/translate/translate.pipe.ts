import { TranslateService } from './translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) { }

    transform(value: string, args?: any[]): any {
        if (!value) {
            return;
        }
        if (args && args.length > 0) {
            let translation = this._translate.instant(value);
            args.forEach(param => translation = translation.replace('{X}', param));
            return translation;
        } else {
            return this._translate.instant(value);
        }
    }
}
