import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SailorsListComponent } from '../sailors-list/sailors-list.component';
import { AuthService } from '../../services/fake-auth.service';

@Component({
  selector: 'app-home',
  imports: [SailorsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    
  }
}
