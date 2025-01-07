import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { SailorService } from './sailor.service';
import { Sailor } from '../models/sailor';

describe('SailorService', () => {
  let service: SailorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        SailorService
      ]
    });
    service = TestBed.inject(SailorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch sailors', () => {
    const mockSailors: Sailor[] = [{ id: '1', name: 'name', surname: 'surname', email: 'name.surname@example.com', dateOfBirth: '1990-01-01' }];
    
    service.getSailors().subscribe(sailors => {
      expect(sailors).toEqual(mockSailors);
    });

    const req = httpMock.expectOne('http://localhost:3000/sailors');
    expect(req.request.method).toBe('GET');
    req.flush(mockSailors);
  });

  it('should create a sailor', () => {
    const newSailor: Sailor = { id: '2', name: 'name', surname: 'surname', email: 'name.surname@example.com', dateOfBirth: '1991-01-01' };

    service.createSailor(newSailor).subscribe(sailor => {
      expect(sailor).toEqual(newSailor);
    });

    const req = httpMock.expectOne('http://localhost:3000/sailors');
    expect(req.request.method).toBe('POST');
    req.flush(newSailor);
  });

  it('should edit a sailor', () => {
    const updatedSailor: Sailor = { id: '1', name: 'name', surname: 'surname', email: 'name.surname@example.com', dateOfBirth: '1990-01-01' };

    service.editSailor(updatedSailor).subscribe(sailor => {
      expect(sailor).toEqual(updatedSailor);
    });

    const req = httpMock.expectOne(`http://localhost:3000/sailors/${updatedSailor.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedSailor);
  });

  it('should delete a sailor', () => {
    const sailorId = '1';

    service.deleteSailor(sailorId).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`http://localhost:3000/sailors/${sailorId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

});