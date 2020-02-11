import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayComponent} from './play.component';
import {AuthService} from '../core/services/auth.service';
import {GameService} from '../core/services/game.service';
import {of} from 'rxjs';

describe('PlayComponent', () => {
    let component: PlayComponent;
    let fixture: ComponentFixture<PlayComponent>;

    const gameServiceSpy = jasmine.createSpyObj('GameService', ['resetGame']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayComponent],
            providers: [{provide: GameService, useValue: gameServiceSpy},
                {provide: AuthService, useValue: {name: 'titi'}}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayComponent);
        component = fixture.componentInstance;
        gameServiceSpy.resetGame.and.returnValue(of(true));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
