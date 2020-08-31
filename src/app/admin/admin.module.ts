import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCoreModule } from '../shared/shared-core.module';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './pages/user/user.component';
import { RoleComponent } from './pages/role/role.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [AdminComponent, UserComponent, RoleComponent, DashboardComponent],
    imports: [CommonModule, AdminRoutingModule, SharedCoreModule, SharedModule],
})
export class AdminModule {}
