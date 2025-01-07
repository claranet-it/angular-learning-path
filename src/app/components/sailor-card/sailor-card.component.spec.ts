import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SailorCardComponent } from './sailor-card.component';
import { Sailor } from '../../models/sailor';

const mockSailor: Sailor = {
  id: '2',
  name: 'name',
  surname: 'surname',
  email: 'email',
  dateOfBirth: '1990-01-01',
}

describe('SailorCardComponent', () => {
  let component: SailorCardComponent;
  let fixture: ComponentFixture<SailorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailorCardComponent, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('sailor', mockSailor);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
