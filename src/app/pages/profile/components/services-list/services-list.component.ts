import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';
import { Properties } from '../../../../shared/utils/properties';

@Component({
    selector: 'services-list',
    templateUrl: 'services-list.component.html',
    styleUrls: ['services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
    services;
    showFee = false;
    currentRate = 6;
    maxRating: number;

    constructor(private backendService: BackendService) {
        this.maxRating = Properties.MAX_RATING;
    }

    ngOnInit() {
        this.backendService.getUserServices(1)
            .subscribe(res => {
                this.services = res;
            });
    }

    onClickShow() {
        this.showFee = !this.showFee;
    }
}
