import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AuthInterceptorService } from './auth-interceptor.service';

/**
 * 基础服务的边界
 */
@NgModule({
    providers: [
        // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: NZ_I18N, useValue: zh_CN },
    ],
})
export class ServicesModule {}
