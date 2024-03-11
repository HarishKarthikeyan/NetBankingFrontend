import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NetBankingService } from '../net-banking.service';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-amount',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfer-amount.component.html',
  styleUrl: './transfer-amount.component.css',
})
export class TransferAmountComponent {
  constructor(
    private bankingService: NetBankingService,
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private router: Router
  ) {}
  accountReceiver: any;
  amount: any;
  message: any;

  transferMoney() {
    if (!this.accountReceiver || !this.amount) {
      console.error('Account Receiver or Amount is missing');
      return;
    }

    const accountSender = this.localStorage.getItem('accountNumber');

    this.bankingService.checkBalance(accountSender).subscribe(
      (senderBalance) => {
        if (senderBalance.balance < this.amount) {
          console.error('Insufficient Balance in Sender Account');
          return;
        }

        const requestData = {
          accountSender,
          accountReceiver: this.accountReceiver,
          amount: this.amount,
        };

        this.http
          .post<any>('http://localhost:8080/harish/transfermoney', requestData)
          .subscribe(
            (response) => {
              console.log('Transfer successful:', response);
              alert('Transfer Successful');
              this.router.navigate(['/mainpage']);
            },
            (error) => {
              console.error('Error occurred while transferring money:', error);
            }
          );
      },
      (error) => {
        console.error('Error occurred while checking sender balance:', error);
      }
    );
  }
}
