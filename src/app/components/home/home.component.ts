import { Component } from '@angular/core';
import { SailorsListComponent } from '../sailors-list/sailors-list.component';

@Component({
  selector: 'app-home',
  imports: [SailorsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
