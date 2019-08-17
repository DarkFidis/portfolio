import { Route } from '@angular/router';
import { ProjectListComponent } from '../components/projects/project-list/project-list.component';
import { PaladinhomeComponent } from '../components/paladin/paladinhome/paladinhome.component';
import { AuthGuard } from '../guards/auth.guard';

export const PROJECTS_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectListComponent
  },
  {
    path: 'paladin',
    //canActivate: [AuthGuard],
    component: PaladinhomeComponent
  }
];
