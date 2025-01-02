import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SailorsListComponent } from '../sailors-list/sailors-list.component';
import { AuthService } from '../../services/fake-auth.service';
import { AddSailorComponent } from "../add-sailor/add-sailor.component";

@Component({
  selector: 'app-home',
  imports: [SailorsListComponent, AddSailorComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authService = inject(AuthService);
  router = inject(Router);
  filter = ''

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    
  }
}
