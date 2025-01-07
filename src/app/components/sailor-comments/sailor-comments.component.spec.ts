import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SailorCommentsComponent } from './sailor-comments.component';
import { SailorCommentsService } from '../../services/sailor-comments.service';

describe('SailorCommentsComponent', () => {
  let component: SailorCommentsComponent;
  let fixture: ComponentFixture<SailorCommentsComponent>;

  beforeEach(async () => {
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have sailorId input set', () => {
    expect(component.sailorId()).toBe('3');
  });

  it('should call fetchSailorComments with correct sailorId', () => {
    const sailorCommentsService = TestBed.inject(SailorCommentsService);
    const spy = spyOn(sailorCommentsService, 'fetchSailorComments');
    fixture.componentRef.setInput('sailorId', '4');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('4');
  });
});
