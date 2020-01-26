import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', loadChildren: () => import('./common-page/common-page.module').then(m => m.CommonPageModule) },
    { path: 'dev', loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'c', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
