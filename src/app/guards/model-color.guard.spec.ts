import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { modelAndColorGuard } from './model-color.guard';

describe('modelAndColorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => modelAndColorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
