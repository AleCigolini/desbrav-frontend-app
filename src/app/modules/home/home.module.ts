import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesbravGenericButtonModule } from 'src/app/shared/components/desbrav-generic-button/desbrav-generic-button.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DesbravGenericButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
