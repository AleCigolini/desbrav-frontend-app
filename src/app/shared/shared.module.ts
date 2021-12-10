import { MaterialAngularModule } from './material-angular.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialAngularModule
  ],
})
export class SharedModule {
}
