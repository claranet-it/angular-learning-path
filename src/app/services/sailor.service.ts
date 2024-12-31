import { computed, Injectable, signal } from '@angular/core';
import { Sailor } from '../models/sailor';

export const initialSailors: Sailor[] = [
  {
    id: 1,
    name: 'Daniele',
    surname: 'Luconi',
    email: 'daniele.luconi@claranet.com',
    dateOfBirth: '1982-11-02'
  },
  {
    id: 2,
    name: 'Domenico',
    surname: 'Cardillo',
    email: 'domenico.cardillo@claranet.com',
    dateOfBirth: '1990-01-01'
  },
]

@Injectable({
  providedIn: 'root',
})
export class SailorService {
  sailors = signal<Sailor[]>(initialSailors)
  maxId = computed(() => this.sailors().length ? Math.max(...this.sailors().map(sailor => sailor.id)) : 0);

  addSailor(sailor: Omit<Sailor, 'id'>) {
    const id = this.maxId() + 1;
    const newSailor: Sailor = { id, ...sailor };
    this.sailors.update((sailors) => [...sailors, newSailor]);
  }

  deleteSailor(id: number) {
    this.sailors.update((sailors) => sailors.filter((item) => item.id !== id));
  }
}
