import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListBeersComponent } from './list-beers.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from '../templates/search-bar/search-bar.component';
import { SortCategoryComponent } from '../templates/sort-category/sort-category.component';
import { LayoutViewComponent } from '../templates/layout-view/layout-view.component';
import { ThumbnailComponent } from '../templates/thumbnail/thumbnail.component';
import { ServertableComponent } from '../templates/servertable/servertable.component';
import { ErrorsComponent } from '../templates/errors/errors.component';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from '../templates/status/status.component';
import { OrganicComponent } from '../templates/organic/organic.component';
import { RetiredComponent } from '../templates/retired/retired.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListBeersComponent', () => {
  let component: ListBeersComponent;
  let fixture: ComponentFixture<ListBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBeersComponent,SearchBarComponent, SortCategoryComponent, StatusComponent,OrganicComponent, RetiredComponent,
        LayoutViewComponent, ThumbnailComponent, ServertableComponent, ErrorsComponent],
      imports: [HttpClientModule, HttpClientTestingModule, NgxPaginationModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
