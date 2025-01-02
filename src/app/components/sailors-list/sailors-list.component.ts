import { Component, computed, inject, input } from '@angular/core';
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
  filter = input('')
  lowerCaseFilter = computed(() => this.filter().toLowerCase())
  filteredSailors = computed(() => this.sailorService.sailors().filter((sailor) => {
    return sailor.name.toLowerCase().includes(this.lowerCaseFilter()) ||
      sailor.surname.toLowerCase().includes(this.lowerCaseFilter()) ||
      sailor.email.toLowerCase().includes(this.lowerCaseFilter());
  }));

  constructor() {
    this.sailorService.fetchSailors();
  }

}
