import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';

@Component({
    selector: 'services-list',
    templateUrl: 'services-list.component.html',
    styleUrls: ['services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
    services;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        this.backendService.getUserServices(1)
            .subscribe(res => {
                this.services = res;
            });
    }
}
