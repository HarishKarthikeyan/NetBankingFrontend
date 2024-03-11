import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BalanceComponent } from './balance/balance.component';
import { TransferAmountComponent } from './transfer-amount/transfer-amount.component';

export const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'checkbalance', component: BalanceComponent },
  { path: 'transferamount', component: TransferAmountComponent },
];
