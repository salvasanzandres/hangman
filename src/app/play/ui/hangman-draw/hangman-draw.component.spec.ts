import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanDrawComponent } from './hangman-draw.component';

describe('HangmanDrawComponent', () => {
  let component: HangmanDrawComponent;
  let fixture: ComponentFixture<HangmanDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
