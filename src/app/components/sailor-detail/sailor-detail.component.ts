import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DatePipe, NgOptimizedImage, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Sailor } from '../../models/sailor';
import { SailorService } from '../../services/sailor.service';
import { SailorCommentsComponent } from "../sailor-comments/sailor-comments.component";

@Component({
  selector: 'app-sailor-detail',
  imports: [RouterModule, SailorCommentsComponent, DatePipe, NgOptimizedImage, AsyncPipe],
  templateUrl: './sailor-detail.component.html',
  styleUrl: './sailor-detail.component.css'
})
export class SailorDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  sailorService = inject(SailorService);
  sailor$: Observable<Sailor>;

  constructor() {
    const sailorId = this.route.snapshot.params['id'];
    this.sailor$ =this.sailorService.getSailor(sailorId);
  }
}
