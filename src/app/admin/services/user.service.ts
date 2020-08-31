import { Injectable, Injector } from '@angular/core';

import { BaseService } from 'src/app/shared/services/base-service';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService extends BaseService {
    constructor(protected injector: Injector) {
        super(injector);
    }
    getUsers(): Observable<any> {
        const url = `${this.baseApi}/user`;
        return this.http.get(url).pipe(map(this.extractData), catchError(this.handleError));
    }
}
