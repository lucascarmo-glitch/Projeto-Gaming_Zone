import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesList } from './games-list';

describe('GamesListComponent', () => {
  let component: GamesList;
  let fixture: ComponentFixture<GamesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
