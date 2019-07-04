import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpagelocalComponent } from './loginpagelocal.component';

describe('LoginpagelocalComponent', () => {
  let component: LoginpagelocalComponent;
  let fixture: ComponentFixture<LoginpagelocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpagelocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpagelocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
