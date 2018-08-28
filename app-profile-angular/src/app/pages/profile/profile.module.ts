import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from './../../shared/modules/translate/translate.module';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
