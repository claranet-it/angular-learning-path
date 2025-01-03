import { Component, computed, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil } from 'rxjs';
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

  constructor() {
    this.sailorService.getSailors().pipe(takeUntil(this.unsubscribe$)).subscribe();
    toObservable(this.filter).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.sailorService.getSailors(searchTerm))
    ).subscribe();
  }

  deleteSailor(id: string) {
    this.sailorService.deleteSailor(id).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

}
