import { Component } from '@angular/core';
import { SailorService } from '../../services/sailor.service';

@Component({
  selector: 'app-sailors-list',
  imports: [],
  templateUrl: './sailors-list.component.html',
  styleUrl: './sailors-list.component.css'
})
export class SailorsListComponent {

  constructor(public sailorService: SailorService) {}
}
