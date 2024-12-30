import { Injectable, signal } from '@angular/core';
import { Sailor } from '../models/sailor';

export const initialSailors: Sailor[] = [
  { id: 1, name: 'Daniele', surname: 'Luconi', email: 'daniele.luconi@claranet.com' },
  { id: 2, name: 'Domenico', surname: 'Cardillo', email: 'domenico.cardillo@claranet.com' },
]

@Injectable({
  providedIn: 'root',
})
export class SailorService {
  sailors = signal<Sailor[]>(initialSailors)
}
