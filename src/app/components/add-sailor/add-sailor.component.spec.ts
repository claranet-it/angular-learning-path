import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { AddSailorComponent } from './add-sailor.component';

describe('AddSailorComponent', () => {
  let component: AddSailorComponent;
  let fixture: ComponentFixture<AddSailorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [AddSailorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
