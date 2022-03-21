import { TestBed } from '@angular/core/testing';

import { ManageAreaService } from './manage-area.service';

describe('ManageAreaService', () => {
  let service: ManageAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
