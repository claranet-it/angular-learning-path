import { computed, Injectable, signal } from '@angular/core';
import { SailorComment } from '../models/sailor-comment';

export const sailorComments: SailorComment[] = [
  {
    id: 1,
    sailorId: 1,
    text: 'Commento 1',
    date: '2023-01-01 09:00:00'
  },
  {
    id: 2,
    sailorId: 1,
    text: 'Commento 2',
    date: '2023-02-01 23:59:59'
  },
  {
    id: 3,
    sailorId: 1,
    text: 'Commento 3',
    date: '2023-05-07 10:00:00'
  },
  {
    id: 4,
    sailorId: 2,
    text: 'Commento ciao ciao',
    date: '2023-02-12 12:30:00'
  },
]

@Injectable({
  providedIn: 'root',
})
export class SailorCommentsService {
  sailorComments = signal<SailorComment[]>(sailorComments)

  getSailorComments(sailorId: number): SailorComment[] {
    return this.sailorComments().filter((comments) => comments.sailorId === sailorId);
  }
}
