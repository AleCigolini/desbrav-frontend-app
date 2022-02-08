import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './route/catalog-routing.module';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
