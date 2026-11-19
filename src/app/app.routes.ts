import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: "Dr. Yewale's Mauli Children & General Clinic | Pediatrician Nashik"
  },
  {
    path: 'not-found',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found - Mauli Clinic'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
