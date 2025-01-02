import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sailor } from '../models/sailor';

@Injectable({
  providedIn: 'root',
})
export class SailorService {
  sailors = signal<Sailor[]>([])
  http = inject(HttpClient);

  fetchSailors() {
    this.http.get<Sailor[]>('http://localhost:3000/sailors').subscribe(sailors => this.sailors.set(sailors));
  }

  addSailor(sailor: Omit<Sailor, 'id'>) {
    this.http.post('http://localhost:3000/sailors', sailor).subscribe(() => this.fetchSailors());
  }

  editSailor(newSailor: Sailor) {
    this.http.put(`http://localhost:3000/sailors/${newSailor.id}`, newSailor).subscribe(() => this.fetchSailors());
  }

  deleteSailor(id: string) {
    this.http.delete(`http://localhost:3000/sailors/${id}`).subscribe(() => this.fetchSailors());
  }

  getSailor(id: string): Observable<Sailor> {
    return this.http.get<Sailor>(`http://localhost:3000/sailors/${id}`);
  }
}
