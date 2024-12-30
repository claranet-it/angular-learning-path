import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorsListComponent } from './sailors-list.component';

describe('SailorsListComponent', () => {
  let component: SailorsListComponent;
  let fixture: ComponentFixture<SailorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailorsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
