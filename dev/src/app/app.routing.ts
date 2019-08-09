import { Route } from '@angular/router';

export const APP_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: 'src/app/modules/home.module#HomeModule'
  },
  {
    path: 'projects',
    loadChildren: 'src/app/modules/projets.module#ProjetsModule'
  }
];
