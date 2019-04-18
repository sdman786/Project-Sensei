import { TestBed } from '@angular/core/testing';

import { SessionResolverService } from './resolvers/session-resolver.service';

describe('SessionResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionResolverService = TestBed.get(SessionResolverService);
    expect(service).toBeTruthy();
  });
});
