import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';
import { Properties } from '../../../../shared/utils/properties';

@Component({
    selector: 'services-list',
    templateUrl: 'services-list.component.html',
    styleUrls: ['services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
    services: any[];
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
                let count = 0;
                this.services.forEach(item => {
                    item.sections.forEach(element => {
                        element.hidden = true;
                        element.id = count;
                        count++;
                    });
                });
            });
    }

    onClickShow(service_name: string, section_id: number) {
        const service_idx = this.services.findIndex(item => item.service_name === service_name);
        const section_idx = this.services[service_idx].sections.findIndex(item => item.id === section_id);
        this.services[service_idx].sections[section_idx].hidden = !this.services[service_idx].sections[section_idx].hidden;
    }
}
