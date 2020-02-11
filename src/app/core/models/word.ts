export class Word {
    letters: Letter[] = [];
    finished = false;

    constructor(newGame: string) {
        for (let i = 0; i < newGame.length; i++) {
            this.letters.push(new Letter(newGame.charAt(i)));
        }
    }
}

export class Letter {
    constructor(public value: string, public checked: boolean = false) {
    }
}
