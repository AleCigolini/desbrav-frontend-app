import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesbravFooterComponent } from 'src/app/shared/desbrav-footer/desbrav-footer.component';


describe('DesbravFooterComponent', () => {
  let component: DesbravFooterComponent;
  let fixture: ComponentFixture<DesbravFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesbravFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesbravFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
