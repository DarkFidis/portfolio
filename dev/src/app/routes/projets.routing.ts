import { Route } from '@angular/router';

export const PROJECTS_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectListComponent
  }
];
