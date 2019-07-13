import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGlassesComponent } from './modal-glasses.component';

describe('ModalGlassesComponent', () => {
  let component: ModalGlassesComponent;
  let fixture: ComponentFixture<ModalGlassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGlassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
