import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonPageComponent } from './common-page.component';

import { HomeComponent } from './home/home.component';
import { JoininComponent } from './joinin/joinin.component';

const routes: Routes = [
    { path: '', component: CommonPageComponent, children: [{ path: 'home', component: HomeComponent }] },

    { path: 'joinin', component: JoininComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CommonPageRoutingModule {}
