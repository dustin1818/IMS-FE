import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-header',
  template: `
    <header>
      <nav aria-label="Account navigation">
        <a class="brand" routerLink="/welcome" aria-label="IMS home">
          <img src="assets/images/IMS.svg" alt="">IMS
        </a>
        <div>
          <a *ngIf="page !== 'welcome'" class="text-action" routerLink="/welcome">Home</a>
          <a *ngIf="page !== 'signin'" [class]="page === 'signup' ? 'action' : 'text-action'" routerLink="/signin">Sign in</a>
          <a *ngIf="page !== 'signup'" class="action" routerLink="/signup">Register <mat-icon>arrow_forward</mat-icon></a>
        </div>
      </nav>
    </header>`,
  styles: [`
    header { background: #fff; border-bottom: 1px solid var(--line); }
    nav { max-width: 1460px; margin: auto; padding: 14px clamp(20px, 5.5vw, 88px); display: flex; justify-content: space-between; align-items: center; }
    nav div { display: flex; gap: clamp(12px, 2vw, 30px); align-items: center; }
    @media (max-width: 480px) { nav { padding: 10px 16px; } .action { padding: 10px 12px; } }
  `]
})
export class PublicHeaderComponent {
  @Input() page: 'welcome' | 'signin' | 'signup' = 'welcome';
}
