import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ServicesModule } from './services/services.module';
/**
 * 为其他模块提供基础模块
 */
@NgModule({
    imports: [ServicesModule, CommonModule, NgZorroAntdModule, ReactiveFormsModule, FormsModule, HttpClientModule],
    exports: [NgZorroAntdModule, ReactiveFormsModule, FormsModule, HttpClientModule],
})
export class SharedCoreModule {}
