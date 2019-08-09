import { Route } from '@angular/router';
import { ProjectListComponent } from '../components/projects/project-list/project-list.component';

export const PROJECTS_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectListComponent
  }
];
