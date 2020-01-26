import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedCoreModule } from '../shared/shared-core.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, AdminRoutingModule, SharedCoreModule],
})
export class AdminModule {}
