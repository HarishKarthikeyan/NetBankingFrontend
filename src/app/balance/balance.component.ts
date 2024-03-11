import { Component, OnInit } from '@angular/core';
import { NetBankingService } from '../net-banking.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css',
})
export class BalanceComponent implements OnInit {
  constructor(
    private bankingService: NetBankingService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  accountNumber: any;
  balance: any;
  ngOnInit(): void {
    this.bankingService
      .checkBalance(this.localStorage.getItem('accountNumber'))
      .subscribe((response) => {
        console.log(response);
        this.balance = response.balance;
      });
  }
  goBack() {
    this.router.navigate(['/mainpage']);
  }
}
