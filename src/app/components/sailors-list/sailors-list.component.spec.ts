import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { SailorsListComponent } from './sailors-list.component';
import { SailorService } from '../../services/sailor.service';
import { Sailor } from '../../models/sailor';

describe('SailorsListComponent', () => {
  let component: SailorsListComponent;
  let fixture: ComponentFixture<SailorsListComponent>;
  let sailorService: jasmine.SpyObj<SailorService>;

  beforeEach(async () => {
    sailorService = jasmine.createSpyObj('SailorService', ['getSailors', 'deleteSailor', 'resources']);
    sailorService.getSailors.and.returnValue(of([]));
    sailorService.deleteSailor.and.returnValue(of({} as Sailor));

    await TestBed.configureTestingModule({
      imports: [SailorsListComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: SailorService, useValue: sailorService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSailors on initialization', () => {
    expect(sailorService.getSailors).toHaveBeenCalled();
  });

  it('should call deleteSailor with the correct ID', () => {
    const sailorId = '1';
    component.deleteSailor(sailorId);
    expect(sailorService.deleteSailor).toHaveBeenCalledWith(sailorId);
  });

});