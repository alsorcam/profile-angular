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
    @Input() editProfile: boolean;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        this.backendService.getUser(1)
            .subscribe(res => {
                this.user = res;
            });
    }
        
    uploadImage() {
        let inputUploadFile = document.getElementById('inputUploadFile') as HTMLElement;
        inputUploadFile.click();
    }

    changeTelephone() {
        let re = new RegExp(/[+]\d{11}$/g);
        if (re.test(this.user.telephone)) {
            this.invalidTelephone = false;            
        } else {
            this.invalidTelephone = true;
        }
    }
}
