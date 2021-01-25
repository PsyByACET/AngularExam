import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: '',
        component: PurchaseListComponent,
      },
      {
        path: 'product',
        component: PurchaseEditComponent,
      },
      {
        path: 'product/:id',
        component: PurchaseEditComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
