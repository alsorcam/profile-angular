import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';

@Component({
  selector: 'profile-qualifications',
  templateUrl: 'profile-qualifications.component.html',
  styleUrls: ['profile-qualifications.component.scss']
})
export class ProfileQualificationsComponent implements OnInit {
  qualifications;

  constructor(private readonly backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUserQualifications(1).subscribe(res => this.qualifications = res);
  }
}
