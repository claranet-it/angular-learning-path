import { Component, effect, inject, input, InputSignal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SailorCommentsService } from '../../services/sailor-comments.service';
import { SailorComment } from '../../models/sailor-comment';

@Component({
  selector: 'app-sailor-comments',
  imports: [DatePipe],
  templateUrl: './sailor-comments.component.html',
  styleUrl: './sailor-comments.component.css'
})
export class SailorCommentsComponent {
  sailorId: InputSignal<string> = input.required<string>();
  sailorCommentsService = inject(SailorCommentsService);

  constructor() {
    effect(() => {
      this.sailorCommentsService.fetchSailorComments(this.sailorId());
    })
  }
}
