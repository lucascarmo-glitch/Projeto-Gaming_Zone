import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesRegister } from './games-register';

describe('GamesRegisterComponent', () => {
  let component: GamesRegister;
  let fixture: ComponentFixture<GamesRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesRegister ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
