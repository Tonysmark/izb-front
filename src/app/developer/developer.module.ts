import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer.component';
import { SharedCoreModule } from '../shared/shared-core.module';

@NgModule({
    declarations: [DeveloperComponent],
    imports: [CommonModule, DeveloperRoutingModule, SharedCoreModule],
})
export class DeveloperModule {}
