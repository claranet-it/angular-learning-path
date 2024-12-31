import { Component, Input } from '@angular/core';
import { Sailor } from '../../models/sailor';

@Component({
  selector: 'app-sailor-card',
  imports: [],
  templateUrl: './sailor-card.component.html',
  styleUrl: './sailor-card.component.css'
})
export class SailorCardComponent {
  @Input() sailor!: Sailor;
}
