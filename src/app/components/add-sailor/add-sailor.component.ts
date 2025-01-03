import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SailorService } from '../../services/sailor.service';

@Component({
  selector: 'app-add-sailor',
  imports: [ReactiveFormsModule],
  templateUrl: './add-sailor.component.html',
  styleUrl: './add-sailor.component.css'
})
export class AddSailorComponent {
  sailorService = inject(SailorService);
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  
  addSailorForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.addSailorForm.valid) {
      this.sailorService.createSailor(this.addSailorForm.value).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
        this.addSailorForm.reset();
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}
