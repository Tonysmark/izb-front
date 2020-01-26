import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { CommonPageComponent } from './common-page.component';
import { SharedCoreModule } from '../shared/shared-core.module';
import { JoininComponent } from './joinin/joinin.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetComponent } from './components/forget/forget.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
    declarations: [CommonPageComponent, JoininComponent, SigninComponent, ForgetComponent, SignupComponent],
    imports: [CommonModule, CommonPageRoutingModule, SharedCoreModule],
})
export class CommonPageModule {}
