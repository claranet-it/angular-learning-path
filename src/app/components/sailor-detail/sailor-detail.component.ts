import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Sailor } from '../../models/sailor';
import { SailorService } from '../../services/sailor.service';
import { SailorCardComponent } from "../sailor-card/sailor-card.component";

@Component({
  selector: 'app-sailor-detail',
  imports: [RouterModule, SailorCardComponent],
  templateUrl: './sailor-detail.component.html',
  styleUrl: './sailor-detail.component.css'
})
export class SailorDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  sailorService = inject(SailorService);
  sailor: Sailor | undefined;

  constructor() {
    const sailorId = Number(this.route.snapshot.params['id']);
    this.sailor = this.sailorService.getSailor(sailorId);
  }
}
