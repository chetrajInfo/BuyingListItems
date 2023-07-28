import { TestBed } from '@angular/core/testing';

import { GroceryOptionService } from './grocery-option.service';

describe('GroceryOptionService', () => {
  let service: GroceryOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
