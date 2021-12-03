import { TestBed } from '@angular/core/testing';

import { LoadbootstrapscriptResolver } from './loadbootstrapscript.resolver';

describe('LoadbootstrapscriptResolver', () => {
  let resolver: LoadbootstrapscriptResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadbootstrapscriptResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
