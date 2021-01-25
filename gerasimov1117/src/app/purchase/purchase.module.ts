import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PurchaseComponent, PurchaseListComponent, PurchaseEditComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    ReactiveFormsModule
  ]
})
export class PurchaseModule { }
