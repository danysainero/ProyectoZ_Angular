import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignpagelocalComponent } from './signpagelocal.component';

describe('SignpagelocalComponent', () => {
  let component: SignpagelocalComponent;
  let fixture: ComponentFixture<SignpagelocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignpagelocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignpagelocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
