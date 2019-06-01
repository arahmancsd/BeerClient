import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerComponent } from './beer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorsComponent } from '../templates/errors/errors.component';
import { StatusComponent } from '../templates/status/status.component';
import { OrganicComponent } from '../templates/organic/organic.component';
import { RetiredComponent } from '../templates/retired/retired.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThumbnailComponent } from '../templates/thumbnail/thumbnail.component';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerComponent, ErrorsComponent, StatusComponent, OrganicComponent, RetiredComponent, ThumbnailComponent],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule, NgxPaginationModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
