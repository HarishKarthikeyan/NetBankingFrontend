import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetBankingService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/harish';

  verifyLogin(accountNumber: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.url}/verifyaccount`, {
      accountNumber,
      password,
    });
  }
  checkBalance(accountNumber: any): Observable<any> {
    return this.http.get<any>(
      `${this.url}/getbalanceaccountnumber/${accountNumber}`
    );
  }
  verifyReceiver(accountNumber: any): Observable<any> {
    return this.http.post<any>(`${this.url}/verifyreceiver/${accountNumber}`, {
      accountNumber,
    });
  }

  transferMoney(
    accountSender: any,
    accountReceiver: any,
    amount: any
  ): Observable<any> {
    return this.http.post<any>(`${this.url}/transfermoney`, {
      accountSender,
      accountReceiver,
      amount,
    });
  }
  // getBalanceAccountNumber(accountNumber: any): Observable<any> {
  //   return this.http.get<any>(
  //     `${this.url}/getbalanceaccountnumber/${accountNumber}`
  //   );
  // }
}
