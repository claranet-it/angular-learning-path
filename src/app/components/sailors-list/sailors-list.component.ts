import { Component, inject } from '@angular/core';
import { SailorService } from '../../services/sailor.service';
import { SailorCardComponent } from '../sailor-card/sailor-card.component';

@Component({
  selector: 'app-sailors-list',
  imports: [SailorCardComponent],
  templateUrl: './sailors-list.component.html',
  styleUrl: './sailors-list.component.css'
})
export class SailorsListComponent {
  sailorService = inject(SailorService)
}
