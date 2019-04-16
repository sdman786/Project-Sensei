import { TestBed } from '@angular/core/testing';

import { ListMakerService } from './list-maker.service';

describe('ListMakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListMakerService = TestBed.get(ListMakerService);
    expect(service).toBeTruthy();
  });
});
