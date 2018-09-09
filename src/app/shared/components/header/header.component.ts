import { Component, EventEmitter, Output} from '@angular/core';
import { Properties } from '../../utils/properties';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  colorThemes: any[];

  @Output() changeTheme: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.colorThemes = Properties.COLOR_THEMES;
  }

  selectTheme(color: string) {
    this.changeTheme.emit(color);
  }
}
