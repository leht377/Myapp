import { TestBed } from '@angular/core/testing';

import { PeliculayvideojuegosService } from './peliculayvideojuegos.service';

describe('PeliculayvideojuegosService', () => {
  let service: PeliculayvideojuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculayvideojuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
