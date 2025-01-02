import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorDetailComponent } from './sailor-detail.component';

describe('SailorDetailComponent', () => {
  let component: SailorDetailComponent;
  let fixture: ComponentFixture<SailorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
