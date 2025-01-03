import { Component, computed, inject, input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SailorService } from '../../services/sailor.service';
import { SailorCardComponent } from '../sailor-card/sailor-card.component';

@Component({
  selector: 'app-sailors-list',
  imports: [SailorCardComponent],
  templateUrl: './sailors-list.component.html',
  styleUrl: './sailors-list.component.css'
})
export class SailorsListComponent {
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  sailorService = inject(SailorService)
  filter = input('')
  lowerCaseFilter = computed(() => this.filter().toLowerCase())
  filteredSailors = computed(() => this.sailorService.resources().filter((sailor) => {
    return sailor.name.toLowerCase().includes(this.lowerCaseFilter()) ||
      sailor.surname.toLowerCase().includes(this.lowerCaseFilter()) ||
      sailor.email.toLowerCase().includes(this.lowerCaseFilter());
  }));

  constructor() {
    this.sailorService.getSailors().pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  deleteSailor(id: string) {
    this.sailorService.deleteSailor(id).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

}
