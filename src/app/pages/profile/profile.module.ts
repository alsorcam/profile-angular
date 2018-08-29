import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faGlobe, faVenus, faMars, faCheck } from '@fortawesome/free-solid-svg-icons';

import { BackendService } from './../../shared/services/backend.service';

import { TranslateModule } from './../../shared/modules/translate/translate.module';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { LanguagesLevelComponent } from './components/languages-level/languages-level.component';
import { ProfileQualificationsComponent } from './components/profile-qualifications/profile-qualifications.component';


library.add(faPhone);
library.add(faEnvelope);
library.add(faGlobe);
library.add(faVenus);
library.add(faMars);
library.add(faCheck);

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInformationComponent,
    LanguagesLevelComponent,
    ProfileQualificationsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbProgressbarModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [ProfileComponent],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
