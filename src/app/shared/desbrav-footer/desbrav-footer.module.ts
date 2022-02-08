import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesbravFooterComponent } from './desbrav-footer.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    DesbravFooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DesbravFooterComponent]
})
export class DesbravFooterModule { }
