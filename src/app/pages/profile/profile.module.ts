import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from './../../shared/modules/translate/translate.module';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
