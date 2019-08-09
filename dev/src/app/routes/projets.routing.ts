import { Route } from '@angular/router';
import { ProjectListComponent } from '../components/project-list/project-list.component';

export const PROJECTS_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectListComponent
  }
];
