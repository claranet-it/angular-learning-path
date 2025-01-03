import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Sailor } from '../models/sailor';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
export class SailorService extends ResourceService<Sailor> {
  getSailors(): Observable<Sailor[]> {
    return this.http
      .get<Sailor[]>('http://localhost:3000/sailors')
      .pipe(tap(this.setResources));
  }

  createSailor(sailor: Sailor): Observable<Sailor> {
    return this.http
      .post<Sailor>('http://localhost:3000/sailors', sailor)
      .pipe(tap(this.upsertResource));
  }

  editSailor(sailor: Sailor): Observable<Sailor> {
    return this.http
      .put<Sailor>(`http://localhost:3000/sailors/${sailor.id}`, sailor)
      .pipe(tap(this.upsertResource));
  }

  deleteSailor(id: string): Observable<Sailor> {
    return this.http
      .delete<Sailor>(`http://localhost:3000/sailors/${id}`)
      .pipe(tap(() => this.removeResource(id)));
  }

  getSailor(id: string): Observable<Sailor> {
    return this.http.get<Sailor>(`http://localhost:3000/sailors/${id}`);
  }
}
