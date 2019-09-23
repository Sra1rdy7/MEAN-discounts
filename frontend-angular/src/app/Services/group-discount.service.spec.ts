import { TestBed } from '@angular/core/testing';

import { GroupDiscountService } from './group-discount.service';

describe('GroupDiscountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupDiscountService = TestBed.get(GroupDiscountService);
    expect(service).toBeTruthy();
  });
});
