import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Sailor } from '../../models/sailor';
import { SailorService } from '../../services/sailor.service';

@Component({
  selector: 'app-sailor-card',
  imports: [DatePipe, RouterModule, ReactiveFormsModule],
  templateUrl: './sailor-card.component.html',
  styleUrl: './sailor-card.component.css'
})
export class SailorCardComponent {
  @Input() sailor!: Sailor;
  @Output() delete = new EventEmitter();
  sailorService = inject(SailorService);
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  editMode = false;

  editSailorForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl('', Validators.required)
  });

  constructor() {
    effect(() => {
      this.editSailorForm.get('email')?.setValue(this.sailor.email);
      this.editSailorForm.get('dateOfBirth')?.setValue(this.sailor.dateOfBirth);
    })
  }

  onEditSubmit() {
    const newSailor: Sailor = { 
      ...this.sailor,
      email: this.editSailorForm.get('email')?.value || '',
      dateOfBirth: this.editSailorForm.get('dateOfBirth')?.value || ''
    };
    this.sailorService.editSailor(newSailor).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.editMode = false;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  
}
