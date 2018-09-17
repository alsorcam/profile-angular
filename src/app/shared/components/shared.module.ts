import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { NgbDropdownModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faBolt } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

library.add(faBolt, faCircle);

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbDropdownModule,
    NgbButtonsModule
  ],
  bootstrap: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
