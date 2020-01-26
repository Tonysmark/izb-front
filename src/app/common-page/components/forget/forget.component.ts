import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-forget',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.scss'],
})
export class ForgetComponent implements OnInit {
    retrveForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.retrveForm = this.fb.group({
            email: [],
            verificationCode: [],
        });
    }

    ngOnInit() {}
}
