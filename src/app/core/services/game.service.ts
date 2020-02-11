import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {Word, Letter} from '../models/word';


@Injectable()
export class GameService {
    private dictionaryUrl = 'https://api.datamuse.com/words?rel_jja=yellow';
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
        if (this.hasWordLetter(key.value)) {
            this.markLetterAsChecked(key.value);
            this.word.finished = this.isAllCheckedInWord();
        }
        this.markKeyboardAsChecked(key.value);
        return this.hasWordLetter(key.value);
    }

    private getWord(): Observable<string> {
        return this.httpClient.get(this.dictionaryUrl).pipe(map(value => {
            return value[Math.floor(Math.random() * 100)].word;
        }));
    }

    private hasWordLetter(letter: string): boolean {
        return this.word.letters.some(l => l.value === letter);
    }

    private markLetterAsChecked(value: string) {
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

    private isAllCheckedInWord() {
        return !this.word.letters.some(l => !l.checked);
    }
}
