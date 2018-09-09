import { Component } from '@angular/core';
import { Properties } from './shared/utils/properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-profile-angular';
  selectedTheme: string;

  constructor() {
    this.selectedTheme = Properties.DEFAULT_THEME;
  }

  changeTheme(event: any) {
    this.selectedTheme = event;
  }

  getTheme(): string {
    return 'theme-' + this.selectedTheme;
  }
}
