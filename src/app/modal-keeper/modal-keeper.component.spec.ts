import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKeeperComponent } from './modal-keeper.component';

describe('ModalKeeperComponent', () => {
  let component: ModalKeeperComponent;
  let fixture: ComponentFixture<ModalKeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
