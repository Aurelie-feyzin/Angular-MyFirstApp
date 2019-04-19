import {Component} from '@angular/core';

import {User} from '../model/user';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    public user: User = new User();
    public submitted = false;

    public constructor() {
    }

    public onSubmit() {
        this.submitted = true;
    }
}
