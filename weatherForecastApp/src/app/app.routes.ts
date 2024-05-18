import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    // Other routes can be added here if needed
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page if no route matches
];
