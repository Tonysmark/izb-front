import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { RoleComponent } from './pages/role/role.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'user',
                component: UserComponent,
            },
            {
                path: 'role',
                component: RoleComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
