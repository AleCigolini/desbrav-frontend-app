import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesbravToolbarComponent } from 'src/app/shared/desbrav-toolbar/desbrav-toolbar.component';


describe('DesbravToolbarComponent', () => {
  let component: DesbravToolbarComponent;
  let fixture: ComponentFixture<DesbravToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesbravToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesbravToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
