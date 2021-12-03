import { TestBed } from '@angular/core/testing';

import { LazyScriptLoaderService } from './lazy-script-loader.service';

describe('LazyScriptLoaderService', () => {
  let service: LazyScriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
