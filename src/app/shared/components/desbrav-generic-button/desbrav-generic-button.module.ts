import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesbravGenericButtonComponent } from './desbrav-generic-button.component';
import { MaterialAngularModule } from '../../material-angular.module';



@NgModule({
  declarations: [
    DesbravGenericButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule
  ],
  exports: [DesbravGenericButtonComponent]
})
export class DesbravGenericButtonModule { }
