import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            username: [],
            email: [],
            password: [],
            passwordRepeat: [], // 不作为数据上传
            accountType: ['customer'], // developer  customer
        });
    }

    ngOnInit() {}

    signup() {
        // delete this.signupForm.value.passwordRepeat;
        // this.authService.signup(this.signupForm.value).subscribe(
        //     succ => {
        //         console.log('succ :', succ);
        //     },
        //     err => {}
        // );
    }
}
