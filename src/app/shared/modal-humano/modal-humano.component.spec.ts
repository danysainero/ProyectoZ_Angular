import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHumanoComponent } from './modal-humano.component';

describe('ModalHumanoComponent', () => {
  let component: ModalHumanoComponent;
  let fixture: ComponentFixture<ModalHumanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHumanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
