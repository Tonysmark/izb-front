import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    dataset = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getUsers().subscribe(res => (this.dataset = res));
    }
}
