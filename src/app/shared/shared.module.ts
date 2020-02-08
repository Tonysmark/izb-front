import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';

/**
 * 为其他页面提供基础 component pipes
 */
@NgModule({
    declarations: [],
    imports: [CommonModule, ComponentsModule],
    exports: [ComponentsModule],
})
export class SharedModule {}
