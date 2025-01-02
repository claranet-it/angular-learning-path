import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { SailorDetailComponent } from './components/sailor-detail/sailor-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
    canActivate: [AuthGuard],
  },
  {
    path: 'sailor/:id',
    component: SailorDetailComponent,
    title: 'Sailor Detail',
    canActivate: [AuthGuard],
  },
];
