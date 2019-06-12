import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindasboardComponent } from './maindasboard.component';

describe('MaindasboardComponent', () => {
  let component: MaindasboardComponent;
  let fixture: ComponentFixture<MaindasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
