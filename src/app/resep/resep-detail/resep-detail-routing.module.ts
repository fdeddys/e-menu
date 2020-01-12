import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepDetailPage } from './resep-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ResepDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepDetailPageRoutingModule {}
