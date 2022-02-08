import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesbravToolbarComponent } from './desbrav-toolbar.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    DesbravToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DesbravToolbarComponent]
})
export class DesbravToolbarModule { }
