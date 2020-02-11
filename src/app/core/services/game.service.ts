import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Word, Letter} from '../models/word';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class GameService {
    private dictionaryUrl = 'https://random-word-api.herokuapp.com/word?key=3VCGERNN&number=1';
    public word: Word;
    public keyboard: Word;

    constructor(private httpClient: HttpClient) {
    }

    resetGame(): Observable<any> {
        return this.getWord().pipe(map(word => {
            this.keyboard = new Word('abcdefghijklmnopqrstuvwxyz');
            this.word = new Word(word);
            return this.word;
        }));
    }

    pickKey(key: Letter): boolean {
        if (this.hasLetter(key.value)) {
            this.markWordAsChecked(key.value);
            this.word.finished = this.isAllChecked();
        }
        this.markKeyboardAsChecked(key.value);
        return this.hasLetter(key.value);
    }

    private getWord(): Observable<string> {
        return this.httpClient.get(this.dictionaryUrl).pipe(map(value => {
            return value[0];
        }));
    }

    private hasLetter(letter: string): boolean {
        return this.word.letters.some(l => l.value === letter);
    }

    private markWordAsChecked(value: string) {
        for (const element of this.word.letters) {
            if (element.value === value) {
                element.checked = true;
            }
        }
    }

    private markKeyboardAsChecked(value: string) {
        const index = this.keyboard.letters.findIndex(v => v.value === value);
        this.keyboard.letters[index].checked = true;
    }

    private isAllChecked() {
        return !this.word.letters.some(l => !l.checked);
    }
}
