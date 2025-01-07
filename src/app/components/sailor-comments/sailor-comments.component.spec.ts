import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { SailorCommentsComponent } from './sailor-comments.component';
import { SailorCommentsService } from '../../services/sailor-comments.service';

describe('SailorCommentsComponent', () => {
  let component: SailorCommentsComponent;
  let fixture: ComponentFixture<SailorCommentsComponent>;
  let sailorCommentsService: SailorCommentsService;

  beforeEach(async () => {
    sailorCommentsService = jasmine.createSpyObj('SailorCommentsService', ['fetchSailorComments']);
    (sailorCommentsService.fetchSailorComments as jasmine.Spy).and.returnValue(of([]));

    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [SailorCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorCommentsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('sailorId', '3');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
