import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalZombieComponent } from './modal-zombie.component';

describe('ModalZombieComponent', () => {
  let component: ModalZombieComponent;
  let fixture: ComponentFixture<ModalZombieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalZombieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalZombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
