import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListBeersComponent } from './beers/list-beers/list-beers.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { SortCategoryComponent } from './beers/templates/sort-category/sort-category.component';
import { LayoutViewComponent } from './beers/templates/layout-view/layout-view.component';
import { SearchBarComponent } from './beers/templates/search-bar/search-bar.component';
import { ThumbnailComponent } from './beers/templates/thumbnail/thumbnail.component';
import { BeerComponent } from './beers/beer/beer.component';
import { ErrorsComponent } from './beers/templates/errors/errors.component';
import { StatusComponent } from './beers/templates/status/status.component';
import { OrganicComponent } from './beers/templates/organic/organic.component';
import { RetiredComponent } from './beers/templates/retired/retired.component';
import { ServertableComponent } from './beers/templates/servertable/servertable.component';
import { BeerService } from './services/beer.service';
import { HelperService } from './services/helper.service';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'beer/:id', component: BeerComponent
  },
  {
    path: 'beers', component: ListBeersComponent
  },
  {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ListBeersComponent,
    HomeComponent,
    SortCategoryComponent,
    LayoutViewComponent,
    SearchBarComponent,
    ThumbnailComponent,
    BeerComponent,
    ErrorsComponent,
    StatusComponent,
    OrganicComponent,
    RetiredComponent,
    ServertableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
  ],
  exports: [RouterModule],
  providers: [BeerService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
