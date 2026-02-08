import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesUpdate } from './games-update';

describe('GamesUpdateComponent', () => {
  let component: GamesUpdate;
  let fixture: ComponentFixture<GamesUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesUpdate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
