import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EMenuPage } from './e-menu.page';
import { DetailPage } from './detail/detail.page';

const routes: Routes = [
  {
    path: ':restoId',
    component: EMenuPage
  },
  {
    path: ':restoId/:groupId',
    component: DetailPage,
    // loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EMenuPageRoutingModule {}
