import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../../../shared/services/backend.service';

@Component({
    selector: 'personal-information',
    templateUrl: 'personal-information.component.html',
    styleUrls: ['personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
    user;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        this.backendService.getUser(1)
            .subscribe(res => {
                this.user = res;
            });

    }
}
