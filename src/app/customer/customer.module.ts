import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedCoreModule } from '../shared/shared-core.module';

@NgModule({
    declarations: [CustomerComponent],
    imports: [CommonModule, CustomerRoutingModule, SharedCoreModule],
})
export class CustomerModule {}
