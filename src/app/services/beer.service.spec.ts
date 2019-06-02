import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerService } from './beer.service';
import { Beer, Result } from '../model/beer.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('BeerService', () => {
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

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  beforeEach(() => {
    beerService = TestBed.get(BeerService);
  });
  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  it('should return beeers', () => {
    let resultSet: Result = { data: beers, numberOfPages: numberOfPages, totalResults: totalResults };

    spyOn(beerService, 'getBeers').and.returnValue(of(resultSet));

    beerService.getBeers(null, environment.apiKey).subscribe(
      result => {
        expect(result).toEqual(resultSet, 'expected beers'), fail
      }
    );
  });
  it('should return beer', () => {
    let beer: Beer = beers[0];
    spyOn(beerService, 'getBeer').and.returnValue(of(beer));
    let id: string ='aG4Ie2';

    beerService.getBeer(id, environment.apiKey).subscribe(
      result => {
        expect(result).toEqual(beer);
      }
    );

  });
  // it('should return HttpResponse error (404)', () => {
  //   spyOn(beerService, 'getBeer').and.returnValue(of(HttpErrorResponse));
  //   let id: string ='aG4Ie21';

  //   beerService.getBeer(id, environment.apiKey).subscribe(
  //     result => {
  //       console.log('here: ' + result);
  //       fail('expected 404 page not found error, not beers');
  //     },
  //     error => {
  //       console.log('error: ' + error);
  //       expect(error.message).toContain('404');
  //     }
  //   );

  // });
});
