import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSunGlassesComponent } from './modal-sun-glasses.component';

describe('ModalSunGlassesComponent', () => {
  let component: ModalSunGlassesComponent;
  let fixture: ComponentFixture<ModalSunGlassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSunGlassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSunGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
