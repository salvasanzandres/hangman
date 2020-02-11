import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../core/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    newPlayerForm: FormGroup;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.newPlayerForm = new FormGroup({
            name: new FormControl('', Validators.required)
        });
    }

    createNewGame() {
        this.authService.name = this.newPlayerForm.get('name').value;
        this.router.navigate(['play']);
    }

}
