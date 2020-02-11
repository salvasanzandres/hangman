import {Component, OnInit} from '@angular/core';

import {AuthService} from '../core/services/auth.service';
import {GameService} from '../core/services/game.service';
import {Letter, Word} from '../core/models/word';


@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
    public wrongCounter = 0;
    public playerName: string;
    public word: Word;
    public keyboard: Word;


    constructor(private authService: AuthService,
                private gameService: GameService) {
    }

    ngOnInit() {
        this.startGame();
        this.playerName = this.authService.name;
    }

    pickKey(key: Letter) {
        const hasLetter = this.gameService.pickKey(key);
        this.wrongCounter = hasLetter ? this.wrongCounter : this.wrongCounter + 1;
    }

    startGame() {
        this.gameService.resetGame().subscribe(response => {
            this.word = response;
            this.keyboard = this.gameService.keyboard;
            this.wrongCounter = 0;
        });
    }
}
