import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SailorService } from '../../services/sailor.service';

@Component({
  selector: 'app-add-sailor',
  imports: [ReactiveFormsModule],
  templateUrl: './add-sailor.component.html',
  styleUrl: './add-sailor.component.css'
})
export class AddSailorComponent {
  sailorService = inject(SailorService);
  
  addSailorForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.addSailorForm.valid) {
      this.sailorService.addSailor(this.addSailorForm.value);
      this.addSailorForm.reset();
    }
  }
}
