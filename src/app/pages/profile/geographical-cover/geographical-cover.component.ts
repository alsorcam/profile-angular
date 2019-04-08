import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';

@Component({
	selector: 'geographical-cover',
	templateUrl: 'geographical-cover.component.html',
	styleUrls: ['geographical-cover.component.scss']
})
export class GeographicalCoverComponent implements OnInit {
	geographicalCover;

	constructor(private readonly backendService: BackendService) { }

	ngOnInit() {
		this.backendService.getUserGeographicalCover(1).subscribe(res => this.geographicalCover = res);
	}
}
