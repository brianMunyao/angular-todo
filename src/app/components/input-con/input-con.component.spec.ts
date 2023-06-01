import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputConComponent } from './input-con.component';

describe('InputConComponent', () => {
  let component: InputConComponent;
  let fixture: ComponentFixture<InputConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputConComponent]
    });
    fixture = TestBed.createComponent(InputConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
