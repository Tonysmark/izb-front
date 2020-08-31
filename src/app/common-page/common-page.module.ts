import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCoreModule } from '../shared/shared-core.module';
import { SharedModule } from '../shared/shared.module';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { CommonPageComponent } from './common-page.component';

import { HomeComponent } from './home/home.component';
import { JoininComponent } from './joinin/joinin.component';
import { ForgetComponent } from './components/forget/forget.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
    declarations: [CommonPageComponent, JoininComponent, SigninComponent, ForgetComponent, SignupComponent, HomeComponent],
    imports: [CommonModule, CommonPageRoutingModule, SharedCoreModule, SharedModule],
})
export class CommonPageModule {}
