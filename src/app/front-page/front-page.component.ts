import { Component } from '@angular/core';
import { NetBankingService } from '../net-banking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css',
})
export class FrontPageComponent {
  constructor(private router: Router) {}

  loginPage() {
    this.router.navigate(['/login']);
  }
}
