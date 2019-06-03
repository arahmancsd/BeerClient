import { TestBed } from '@angular/core/testing';
import { HelperService } from './helper.service';
import { ServerPagination } from '../model/beer.model';

describe('HelperService', () => {
  let helper: HelperService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    helper = TestBed.get(HelperService);
  });

  it('should be created', () => {
    expect(helper).toBeTruthy();
  });
});
