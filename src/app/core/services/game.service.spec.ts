import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GameService} from './game.service';
import {Letter} from '../models/word';
import {exhaustMap} from 'rxjs/internal/operators';

describe('GameService', () => {
    let injector: TestBed;
    let service: GameService;
    let httpMock: HttpTestingController;

    const mockedWordList = ['elephant'];



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GameService],
        }).compileComponents();
    }));

    beforeEach(() => {
        injector = getTestBed();
        service = injector.get(GameService);
        httpMock = injector.get(HttpTestingController);
    });

    it('should initialise game', () => {
        service.resetGame().subscribe(response => {
            expect(response.words.length).toEqual(mockedWordList[0].length);
        });
        const req = httpMock.expectOne('https://random-word-api.herokuapp.com/word?key=3VCGERNN&number=1');
        expect(req.request.method).toBe('GET');
        req.flush(mockedWordList);
    });
});
