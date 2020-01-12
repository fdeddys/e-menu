import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'error', pathMatch: 'full' },
    {
        path: 'e-menu',
        loadChildren: () => import('./e-menu/e-menu.module').then( m => m.EMenuPageModule)
    },
    {
        path: 'error',
        loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
