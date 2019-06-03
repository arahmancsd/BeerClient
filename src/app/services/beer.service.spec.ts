import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BeerService } from './beer.service';
import { Beer, Result, BeerResult } from '../model/beer.model';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('BeerService', () => {
  let resultSet: Result;
  let beerService: BeerService;
  let httpMock: HttpTestingController;
  const beers: Beer[] = [
    {
      id: 'aG4Ie2', name: 'Alpha Dog Imperial IPA', abv: '8.5',
      CreateDate: new Date('02, May-2013'), status: 'verified', isOrganic: 'N', isRetired: 'N',
      nameDisplay: 'Alpha Dog Imperial IPA', updateDate: new Date('02, Nov-2018')
    },
    {
      id: 'xyy', name: 'beer', abv: '5', CreateDate: new Date(), status: 'verified', isOrganic: 'N', isRetired: 'N',
      nameDisplay: 'BeerX', updateDate: new Date()
    },
  ];
  const totalResults = 100;
  const numberOfPages = 20;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    beerService = TestBed.get(BeerService);
    httpMock = TestBed.get(HttpTestingController);
    resultSet = { data: beers, numberOfPages, totalResults, status: 'sucess' };
  });

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  /*using spy
  it('should return beeers', () => {
    let resultSet: Result = { data: beers, numberOfPages: numberOfPages, totalResults: totalResults };

    spyOn(beerService, 'getBeers').and.returnValue(of(resultSet));

    beerService.getBeers('beers', null, environment.apiKey).subscribe(
      result => {
        expect(result).toEqual(resultSet, 'expected beers'), fail
      }
    );
  });

  it('should return beer', () => {
    let beerResult: BeerResult;
    let beer: Beer = beers[0];
    spyOn(beerService, 'getBeer').and.returnValue(of(beerResult));
    let id: string = 'aG4Ie2';

    beerService.getBeer('beer', id, environment.apiKey).subscribe(
      result => {
        expect(result.data).toEqual(beer);
      }
    );
  });
*/
  it('should return beers', () => {

    beerService.getBeers('beers', null, environment.apiKey).subscribe(
      result => {
        expect(result.data).not.toBeNull();
        expect(result).toEqual(resultSet);
      }
    );

    const url: string = beerService.rootUrl + 'beers/?key=' + environment.apiKey;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(resultSet);
  });

  it('should return beer detail', () => {
    const beerResult: BeerResult = { data: beers[0], message: 'READ ONLY MODE: Request Successful', status: 'success' };
    const id = 'aG4Ie2';

    beerService.getBeer('beer', id, environment.apiKey).subscribe(
      result => {
        expect(result).not.toBeNull();
        expect(result).toEqual(beerResult);
      }
    );

    const url: string = beerService.rootUrl + 'beer/' + id + '/?key=' + environment.apiKey;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(beerResult);
  });

  it('should return beer status failure object not found', () => {
    const beerResult: BeerResult = { data: null, message: 'The object you requested was not found', status: 'failure' };
    const id = 'aG4Ie1';

    beerService.getBeer('beer', id, environment.apiKey).subscribe(
      result => {
        expect(result).not.toBeNull();
        expect(result).toEqual(beerResult);
      }
    );

    const url: string = beerService.rootUrl + 'beer/' + id + '/?key=' + environment.apiKey;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(beerResult);
  });

  it('should return error 404 not found #beerid not exists', () => {
    const id = 'aG4Ie1';
    beerService.getBeer('beer', id, environment.apiKey).subscribe(
      result => {
      }, (err: any) => {
        expect(err).not.toBeNull();
        expect(err.status).toEqual(404);
      }
    );

    const url: string = beerService.rootUrl + 'beer/' + id + '/?key=' + environment.apiKey;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush('', { status: 404, statusText: 'Ok' });
  });

  it('should return error 401 API key not found #key=123', () => {
    const apiKey = '123';
    beerService.getBeers('beers', null, apiKey).subscribe(
      result => {
      },
      (err: any) => {
        expect(err).not.toBeNull();
        expect(err.status).toEqual(401);
      }
    );

    const url: string = beerService.rootUrl + 'beers/?key=' + apiKey;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush('', { status: 401, statusText: 'Ok' });
  });
});
