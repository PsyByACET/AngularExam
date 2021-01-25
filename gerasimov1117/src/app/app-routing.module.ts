import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'purchase',
    loadChildren: () =>
    import('./purchase/purchase.module').then(m => m.PurchaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
