import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDicesComponent } from './select-dices.component';

describe('SelectDicesComponent', () => {
  let component: SelectDicesComponent;
  let fixture: ComponentFixture<SelectDicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
