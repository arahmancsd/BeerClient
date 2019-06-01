import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortCategoryComponent } from './sort-category.component';
import { FormsModule } from '@angular/forms';

describe('SortCategoryComponent', () => {
  let component: SortCategoryComponent;
  let fixture: ComponentFixture<SortCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortCategoryComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });
});
