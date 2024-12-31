import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorCardComponent } from './sailor-card.component';

describe('SailorCardComponent', () => {
  let component: SailorCardComponent;
  let fixture: ComponentFixture<SailorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
