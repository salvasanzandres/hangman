import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-hangman-draw',
    templateUrl: './hangman-draw.component.html',
    styleUrls: ['./hangman-draw.component.scss']
})
export class HangmanDrawComponent {

    @Input() wrongCounter: number;

    constructor() {
    }
}
