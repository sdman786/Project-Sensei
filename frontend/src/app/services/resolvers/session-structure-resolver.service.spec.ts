import { TestBed } from '@angular/core/testing';

import { SessionStructureResolverService } from './session-structure-resolver.service';

describe('SessionStructureResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionStructureResolverService = TestBed.get(SessionStructureResolverService);
    expect(service).toBeTruthy();
  });
});
