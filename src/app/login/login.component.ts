import { Component } from '@angular/core';
import { NetBankingService } from '../net-banking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private bankingService: NetBankingService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  accountNumber: any;
  password: any;
  message: any;

  verifyLogin() {
    this.localStorage.setItem('accountNumber', this.accountNumber);
    this.bankingService
      .verifyLogin(this.accountNumber, this.password)
      .subscribe((response) => {
        console.log(response);
        if (response) {
          this.router.navigate(['/mainpage']);
        } else {
          this.message = 'Incorrect Account Number or Password.';
        }
      });
    this.accountNumber = '';
    this.password = '';
  }
}
