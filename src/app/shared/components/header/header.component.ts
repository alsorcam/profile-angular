import { Component, EventEmitter, Output} from '@angular/core';
import { Properties } from '../../utils/properties';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  colorThemes: any[];

  @Output() onThemeChanged: EventEmitter<any> = new EventEmitter();

  constructor(private readonly translate: TranslateService) {
    this.colorThemes = Properties.COLOR_THEMES;
  }

  themeSelected(color: string) {
    this.onThemeChanged.emit(color);
  }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }
}
