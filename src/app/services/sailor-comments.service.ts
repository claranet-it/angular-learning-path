import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SailorComment } from '../models/sailor-comment';

@Injectable({
  providedIn: 'root',
})
export class SailorCommentsService {
  sailorComments = signal<SailorComment[]>([])
  http = inject(HttpClient);

  fetchSailorComments(sailorId: string) {
    // sailorId not used for this example
    this.http.get<SailorComment[]>('http://localhost:3000/comments').subscribe(comments => this.sailorComments.set(comments));
  }

}
