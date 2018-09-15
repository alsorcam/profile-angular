import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BackendService } from './../../../../shared/services/backend.service';

@Component({
    selector: 'personal-information',
    templateUrl: 'personal-information.component.html',
    styleUrls: ['personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
    user;
    invalidTelephone: boolean = false;
    invalidEmail: boolean = false;
    @Input() editProfile: boolean;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        this.backendService.getUser(1)
            .subscribe(res => {
                this.user = res;
                this.validateTelephone();
                this.validateEmail();
            });
    }
        
    uploadImage() {
        let inputUploadFile = document.getElementById('inputUploadFile') as HTMLElement;
        inputUploadFile.click();
    }

    validateTelephone() {
        let re = new RegExp(/[+]\d{11}$/g);
        if (re.test(this.user.telephone)) {
            this.invalidTelephone = false;            
        } else {
            this.invalidTelephone = true;
        }
    }

    validateEmail() {
        let re = new RegExp(/^[A-Za-z0-9._-]+@[A-Za-z0-9]+\.[a-z]{2,}$/g);
        if (re.test(this.user.email)) {
            this.invalidEmail = false;            
        } else {
            this.invalidEmail = true;
        }
    }
}
