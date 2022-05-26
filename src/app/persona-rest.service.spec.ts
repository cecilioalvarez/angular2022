import { TestBed } from '@angular/core/testing';

import { PersonaRESTService } from './persona-rest.service';

describe('PersonaRESTService', () => {
  let service: PersonaRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
