import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
    private _name: string;

    constructor(public router: Router) {
    }

    canActivate(): boolean {
        if (!this._name) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
