import { TestBed } from '@angular/core/testing';

import { EMenuService } from './e-menu.service';

describe('EMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EMenuService = TestBed.get(EMenuService);
    expect(service).toBeTruthy();
  });
});
