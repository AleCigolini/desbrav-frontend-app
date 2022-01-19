import { MaterialAngularModule } from './material-angular.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialAngularModule,
    TranslateModule
  ],
})
export class SharedModule {
}
