import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    @Output() changeEvt: EventEmitter<any> = new EventEmitter();
    constructor(private fb: FormBuilder) {
        this.signinForm = this.fb.group({
            email: [],
            password: [],
            remember: [],
        });
    }

    ngOnInit() {}

    changeTo() {
        // 事件向上传递到 authorize
        this.changeEvt.emit('signup');
    }

    signin() {
        // if (this.signinForm.valid) {
        //     this.authService.signin(this.signinForm.value).subscribe(
        //         succ => {
        //             console.log('succ :', succ);
        //         },
        //         err => {}
        //     );
        // }
    }
}
