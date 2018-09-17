import { Component } from '@angular/core';
import { Properties } from './shared/utils/properties';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-profile-angular';
  selectedTheme: string;

  constructor(translate: TranslateService) {
    this.selectedTheme = Properties.DEFAULT_THEME;
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  changeTheme(event: any) {
    this.selectedTheme = event;
  }

  getTheme(): string {
    return 'theme-' + this.selectedTheme;
  }
}
