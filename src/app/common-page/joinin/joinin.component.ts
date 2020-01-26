import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-joinin',
    templateUrl: './joinin.component.html',
    styleUrls: ['./joinin.component.scss'],
})
export class JoininComponent implements OnInit {
    public indexer = [
        { name: '登录', offset: 0 },
        { name: '注册', offset: 7 },
        { name: '找回', offset: 14 },
    ];
    public pageIndex = 0;

    constructor() {}
    ngOnInit() {}

    changeIndex(type: string) {
        if (type === 'push') {
            this.pageIndex++;
        }
        if (type === 'back') {
            this.pageIndex--;
        }
    }
}
