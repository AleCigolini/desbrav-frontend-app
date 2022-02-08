import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './route/home-routing.module';
import { HomeComponent } from './home.component';
import { DesbravToolbarModule } from 'src/app/shared/desbrav-toolbar/desbrav-toolbar.module';
import { DesbravFooterModule } from 'src/app/shared/desbrav-footer/desbrav-footer.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DesbravToolbarModule,
    DesbravFooterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
