import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { SailorDetailComponent } from './sailor-detail.component';

describe('SailorDetailComponent', () => {
  let component: SailorDetailComponent;
  let fixture: ComponentFixture<SailorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [SailorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
