import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Sailor } from '../../models/sailor';

@Component({
  selector: 'app-sailor-card',
  imports: [DatePipe],
  templateUrl: './sailor-card.component.html',
  styleUrl: './sailor-card.component.css'
})
export class SailorCardComponent {
  @Input() sailor!: Sailor;
  @Output() delete = new EventEmitter();
}
