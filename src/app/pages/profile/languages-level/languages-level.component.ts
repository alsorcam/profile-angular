import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';

@Component({
  selector: 'languages-level',
  templateUrl: 'languages-level.component.html',
  styleUrls: ['languages-level.component.scss']
})
export class LanguagesLevelComponent implements OnInit {

  languages;
  constructor(private readonly backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUserLanguages(1).subscribe(res => this.languages = res);
  }
}
