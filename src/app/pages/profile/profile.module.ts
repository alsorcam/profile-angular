import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { NgbProgressbarModule, NgbCollapseModule, NgbRatingModule, NgbDropdownModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faGlobe, faVenus, faMars, faCheck, faAngleUp, faAngleDown, faCogs, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import { BackendService } from './../../shared/services/backend.service';

import { ProfileComponent } from './profile/profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { LanguagesLevelComponent } from './languages-level/languages-level.component';
import { ProfileQualificationsComponent } from './profile-qualifications/profile-qualifications.component';
import { GeographicalCoverComponent } from './geographical-cover/geographical-cover.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ServicesListComponent } from './services-list/services-list.component';

library.add(faPhone, faTimes, faEnvelope, faGlobe, faVenus, faMars, faCheck, faAngleDown, faAngleUp, faCogs, faPencilAlt);

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
    NgbRatingModule,
    NgbDropdownModule,
    NgbButtonsModule,
    FormsModule
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
