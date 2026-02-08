import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictMenu } from './restrict-menu';

describe('MenuComponent', () => {
  let component: RestrictMenu;
  let fixture: ComponentFixture<RestrictMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictMenu ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
