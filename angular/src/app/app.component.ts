import { Component, inject } from '@angular/core';
import { TaktService, TaktEventDirective } from '@vskstudio/takt-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaktEventDirective],
  template: `
    <main>
      <h1>Takt Angular Example</h1>
      <button (click)="buy()">Buy (imperative)</button>
      <button
        taktEvent="Signup"
        [taktProps]="{ plan: 'pro' }"
        [taktRevenue]="{ amount: '29.00', currency: 'EUR' }"
      >
        Sign up (declarative)
      </button>
      <!-- autocaptured by tagged: true (no JS needed) -->
      <button data-takt-tag="Newsletter">Subscribe (tagged)</button>
    </main>
  `,
})
export class AppComponent {
  private readonly takt = inject(TaktService);

  buy(): void {
    this.takt.track('Purchase', {
      props: { plan: 'pro', source: 'example' },
      revenue: { amount: '9.00', currency: 'EUR' },
    });
  }
}
