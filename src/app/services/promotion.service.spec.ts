import { TestBed, inject } from '@angular/core/testing';

import { PromotionService } from './promotion.service';

describe('PromotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionService]
    });
  });

  it('should be created', inject([PromotionService], (service: PromotionService) => {
    expect(service).toBeTruthy();
  }));
});
