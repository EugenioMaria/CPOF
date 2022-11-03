import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BigCardComponent } from 'src/app/features/big-card/big-card.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BigCardComponent
  ]
})
export class HomeModule { }
