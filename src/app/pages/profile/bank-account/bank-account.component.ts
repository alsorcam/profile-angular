import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';

@Component({
  selector: 'bank-account',
  templateUrl: 'bank-account.component.html',
  styleUrls: ['bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  bankAccount;

  constructor(private readonly backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUserBankAccount(1).subscribe(res => this.bankAccount = res);
  }
}
