import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServertableComponent } from './servertable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { StatusComponent } from '../status/status.component';
import { OrganicComponent } from '../organic/organic.component';
import { RetiredComponent } from '../retired/retired.component';

describe('ServertableComponent', () => {
  let component: ServertableComponent;
  let fixture: ComponentFixture<ServertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServertableComponent, StatusComponent, OrganicComponent, RetiredComponent],
      imports: [NgxPaginationModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
