import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateButtonComponent } from './donate-button/donate-button.component';



@NgModule({
  declarations: [
    DonateButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DonateButtonComponent
  ]
})
export class FeaturesModule { }
