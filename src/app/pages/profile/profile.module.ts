import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgbProgressbarModule, NgbCollapseModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faGlobe, faVenus, faMars, faCheck, faAngleUp, faAngleDown, faCaretDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { BackendService } from './../../shared/services/backend.service';

import { TranslateModule } from './../../shared/modules/translate/translate.module';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { LanguagesLevelComponent } from './components/languages-level/languages-level.component';
import { ProfileQualificationsComponent } from './components/profile-qualifications/profile-qualifications.component';
import { GeographicalCoverComponent } from './components/geographical-cover/geographical-cover.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';
import { ServicesListComponent } from './components/services-list/services-list.component';

library.add(faPhone, faEnvelope, faGlobe, faVenus, faMars, faCheck, faAngleDown, faAngleUp);

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInformationComponent,
    LanguagesLevelComponent,
    ProfileQualificationsComponent,
    GeographicalCoverComponent,
    BankAccountComponent,
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbProgressbarModule,
    NgbCollapseModule,
    NgbRatingModule
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
