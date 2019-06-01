import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutViewComponent } from './layout-view.component';
import { FormsModule } from '@angular/forms';

describe('LayoutViewComponent', () => {
  let component: LayoutViewComponent;
  let fixture: ComponentFixture<LayoutViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutViewComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
