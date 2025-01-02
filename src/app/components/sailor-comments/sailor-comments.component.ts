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
  sailorId: InputSignal<number> = input.required<number>();
  sailorCommentsService = inject(SailorCommentsService);
  sailorComments: SailorComment[] = [];

  constructor() {
    effect(() => {
      this.sailorComments = this.sailorCommentsService.getSailorComments(this.sailorId());
    })
  }
}
