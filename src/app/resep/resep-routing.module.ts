import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepPage } from './resep.page';

const routes: Routes = [
  {
    path: '',
    component: ResepPage
  },
  {
    path: ':recipeId',
    loadChildren: () => import('./resep-detail/resep-detail.module').then( m => m.ResepDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepPageRoutingModule {}
