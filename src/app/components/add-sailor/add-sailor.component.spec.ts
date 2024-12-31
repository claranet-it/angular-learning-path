import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSailorComponent } from './add-sailor.component';

describe('AddSailorComponent', () => {
  let component: AddSailorComponent;
  let fixture: ComponentFixture<AddSailorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
