import { Component, Injector, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BaseComponent } from './shared/components/base-component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent implements OnInit {
    loading = false;
    constructor(protected injector: Injector) {
        super(injector);
        this.router.events.subscribe(event => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }

                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    ngOnInit(): void {}
}
