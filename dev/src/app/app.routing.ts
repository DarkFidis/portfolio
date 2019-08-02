import { Route } from '@angular/router';

export const APP_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: 'app/modules/home.module#HomeModule'
  }
];
