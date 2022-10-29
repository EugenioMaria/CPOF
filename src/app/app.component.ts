import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonateComponent } from './modules/donate/donate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caminhando para o Futuro';
  set currentComponent(component: Component) {
    this.currentRouterOutletComponent = component
  }

  currentRouterOutletComponent!: Component

  constructor(
    protected router: Router
  ) {}

  isDonatePage = () => this.currentRouterOutletComponent instanceof DonateComponent
}
