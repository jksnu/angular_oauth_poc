import { TestBed } from '@angular/core/testing';

import { ReqInterceptorService } from './req-interceptor.service';

describe('ReqInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqInterceptorService = TestBed.get(ReqInterceptorService);
    expect(service).toBeTruthy();
  });
});
