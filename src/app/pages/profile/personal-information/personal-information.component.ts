import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from './../../../shared/services/backend.service';

@Component({
  selector: 'personal-information',
  templateUrl: 'personal-information.component.html',
  styleUrls: ['personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  user;
  invalidTelephone = false;
  invalidEmail = false;
  @Input() editProfile: boolean;

  constructor(private readonly backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUser(1)
      .subscribe(res => {
        this.user = res;
        this.validateTelephone();
        this.validateEmail();
      });
  }

  uploadImage() {
    const inputUploadFile = document.getElementById('inputUploadFile');
    inputUploadFile.click();
  }

  validateTelephone() {
    const re = new RegExp(/[+]\d{11}$/g);
    if (re.test(this.user.telephone)) {
      this.invalidTelephone = false;
    } else {
      this.invalidTelephone = true;
    }
  }

  validateEmail() {
    const re = new RegExp(/^[A-Za-z0-9._-]+@[A-Za-z0-9]+\.[a-z]{2,}$/g);
    if (re.test(this.user.email)) {
      this.invalidEmail = false;
    } else {
      this.invalidEmail = true;
    }
  }
}
