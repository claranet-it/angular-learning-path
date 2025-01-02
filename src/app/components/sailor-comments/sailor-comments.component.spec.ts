import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorCommentsComponent } from './sailor-comments.component';

describe('SailorCommentsComponent', () => {
  let component: SailorCommentsComponent;
  let fixture: ComponentFixture<SailorCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailorCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
