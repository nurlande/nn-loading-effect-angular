import { TestBed } from '@angular/core/testing';

import { NnLoadingEffectAngularService } from './nn-loading-effect-angular.service';

describe('NnLoadingEffectAngularService', () => {
  let service: NnLoadingEffectAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NnLoadingEffectAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
