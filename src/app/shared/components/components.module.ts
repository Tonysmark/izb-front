import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCoreModule } from '../shared-core.module';

import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [LogoComponent, UserComponent, FooterComponent],
    exports: [LogoComponent, UserComponent, FooterComponent],
    imports: [CommonModule, SharedCoreModule],
})
export class ComponentsModule {}
