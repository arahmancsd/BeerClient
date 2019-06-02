import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListBeersComponent } from './list-beers.component';
import { HttpClientModule, HttpParams } from '@angular/common/http';
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
import { BeerService } from 'src/app/services/beer.service';
import { Beer, Result, SortOption } from 'src/app/model/beer.model';
import { of } from 'rxjs';

describe('ListBeersComponent', () => {
  let component: ListBeersComponent;
  let fixture: ComponentFixture<ListBeersComponent>;
  let beerService: BeerService;
  const beers: Beer[] = [
    {
      id: 'x', name: 'beer', abv: '5', CreateDate: new Date(), status: 'verified', isOrganic: 'N', isRetired: 'N',
      nameDisplay: 'BeerX', updateDate: new Date()
    },
    {
      id: 'xyy', name: 'beer', abv: '5', CreateDate: new Date(), status: 'verified', isOrganic: 'N', isRetired: 'N',
      nameDisplay: 'BeerX', updateDate: new Date()
    },
  ];
  const totalResults: number = 100;
  const numberOfPages: number = 20;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListBeersComponent, SearchBarComponent, SortCategoryComponent, StatusComponent, OrganicComponent, RetiredComponent,
        LayoutViewComponent, ThumbnailComponent, ServertableComponent, ErrorsComponent],
      imports: [HttpClientModule, HttpClientTestingModule, NgxPaginationModule, FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeersComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch/get http result', () => {
    let resultSet: Result = { data: beers, numberOfPages: numberOfPages, totalResults: totalResults, status:"success" };
    spyOn(beerService, 'getBeers').and.returnValue(of(resultSet));
    component.ngOnInit();
    expect(component.resultSet).toEqual(resultSet);
  });

  it('should add #searchCategory and #searchTerm in query string', () => {
    let searchCategory = 'Name';
    let searchTerm = '12th Of Never';

    component.searchTermChanged(searchCategory);
    component.searchTermChanged(searchTerm);

    let params = new HttpParams()
      .set(searchCategory.toLowerCase(), searchTerm.toLowerCase());

    expect(component.generateQueryString()).toEqual(params);
  });

  it('should add #pageNumber to the query string', () => {
    let pageNumber = 5;
    component.pageNumber = pageNumber;

    let params = new HttpParams()
      .set('p', pageNumber.toString());

    expect(component.generateQueryString()).toEqual(params);
  });

  it('should add #sort #order to the query string', () => {
    let sortBy: SortOption = { id: 1, text: 'Name', sortOrder: 'asc', columnToSort: 'name' };
    component.sortingChanged(sortBy);

    let params = new HttpParams()
      .set('order', sortBy.columnToSort)
      .set('sort', sortBy.sortOrder);

    expect(component.generateQueryString()).toEqual(params);
  });

  it('should generate complete query string #p, ##searchTerm, #searchCategory, #sort, #order', () => {
    let searchCategory = 'Name';
    let searchTerm = '12th Of Never';
    let pageNumber = 5;
    let sortBy: SortOption = { id: 1, text: 'Name', sortOrder: 'asc', columnToSort: 'name' };

    component.sortingChanged(sortBy);
    component.searchCategoryChanged(searchCategory);
    component.searchTermChanged(searchTerm);
    component.pageNumber = pageNumber;

    let params = new HttpParams()
      .set(searchCategory.trim().toLowerCase(), searchTerm.trim().toLowerCase())
      .set('p', pageNumber.toString())
      .set('order', sortBy.columnToSort)
      .set('sort', sortBy.sortOrder)

    expect(component.generateQueryString()).toEqual(params);
  });

  it('should turn on #loader', () => {

    let searchCategory = 'Name';
    let searchTerm = '12th Of Never';
    let pageNumber = 5;
    let sortBy: SortOption = { id: 1, text: 'Name', sortOrder: 'asc', columnToSort: 'name' };

    component.isLoader = false;
    component.sortingChanged(sortBy);
    component.searchCategoryChanged(searchCategory);
    component.searchTermChanged(searchTerm);
    component.pageNumber = pageNumber;

    component.loadBeers(component.generateQueryString());
    expect(component.isLoader).toBe(true);

  });

});

