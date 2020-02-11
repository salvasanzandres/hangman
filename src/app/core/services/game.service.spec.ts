import {async, getTestBed, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GameService} from './game.service';


describe('GameService', () => {
    let injector: TestBed;
    let service: GameService;
    let httpMock: HttpTestingController;

    const mockedWordList = [{word: 'elephant'}];


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GameService],
        }).compileComponents();
    }));

    beforeEach(() => {
        injector = getTestBed();
        service = TestBed.inject(GameService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should initialise game', () => {
        service.resetGame().subscribe(response => {
            expect(response.words.length).toEqual(mockedWordList[0].word.length);
        });
        const req = httpMock.expectOne('https://api.datamuse.com/words?rel_jja=yellow');
        expect(req.request.method).toBe('GET');
        req.flush(mockedWordList);
    });
});
