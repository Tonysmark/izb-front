import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCoreModule } from '../shared/shared-core.module';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, AdminRoutingModule, SharedCoreModule, SharedModule],
})
export class AdminModule {}
