import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isDevMode, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { NzModalService, NzMessageService } from 'ng-zorro-antd';

import { throwError } from 'rxjs';

export class BaseService {
    protected baseApi = isDevMode() ? 'http://localhost:8080' : '';

    protected http: HttpClient;
    protected router: Router;

    public nzModalService: NzModalService;

    public nzMessageService: NzMessageService;

    constructor(protected injector: Injector) {
        this.http = injector.get(HttpClient);
        this.router = injector.get(Router);
        this.nzMessageService = injector.get(NzMessageService);
        this.nzModalService = injector.get(NzModalService);
    }

    protected extractData(res: any) {
        // const status = Number(res.status);
        // if (status !== 200) {
        //     throw new HttpErrorResponse({ error: { message: res.message }, status: res.code });
        // }
        return res['result'] || res['data'];
    }
    protected handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('An error occurred:', errorResponse.error.message);
            return throwError(errorResponse.error.message);
        } else {
            if (errorResponse.status === 401) {
                this.nzModalService.confirm({
                    nzTitle: '未登录的访问：',
                    nzContent: '您当前的操作需要登录，点击确定登陆！',
                    nzOnOk: () => {
                        this.router.navigate(['/', 'login'], {
                            queryParams: { url: this.router.url },
                        });
                    },
                });
            } else {
                this.nzMessageService.warning(errorResponse.error.message);
            }
            return throwError(errorResponse.error.error);
        }
    }
    protected params(params: {}): any {
        let httpParams = new HttpParams();

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                httpParams = httpParams.append(key, params[key]);
            }
        }
        return { params: httpParams };
    }
}
