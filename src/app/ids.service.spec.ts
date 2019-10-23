import { TestBed } from '@angular/core/testing';

import { IdsService } from './ids.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: IdsService = TestBed.get(IdsService);
    expect(service).toBeTruthy();
  });
});
