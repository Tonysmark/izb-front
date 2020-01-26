import { Router, ActivatedRoute } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';

import { Injector } from '@angular/core';

export class BaseComponent {
    protected router: Router;
    protected activatedRoute: ActivatedRoute;
    protected nzMessageService: NzMessageService;
    protected nzmodalService: NzModalService;

    constructor(protected injector: Injector) {
        this.router = injector.get(Router);
        this.activatedRoute = injector.get(ActivatedRoute);
        this.nzmodalService = injector.get(NzModalService);
        this.nzMessageService = injector.get(NzMessageService);
    }
}
