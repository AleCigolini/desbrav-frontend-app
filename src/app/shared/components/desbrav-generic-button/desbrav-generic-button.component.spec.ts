import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesbravGenericButtonComponent } from './desbrav-generic-button.component';

describe('DesbravGenericButtonComponent', () => {
  let component: DesbravGenericButtonComponent;
  let fixture: ComponentFixture<DesbravGenericButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesbravGenericButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesbravGenericButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
