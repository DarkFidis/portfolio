import { Route } from '@angular/router';
import { PresentationComponent } from '../components/presentation/presentation.component';

export const HOME_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: PresentationComponent
  },
  {
    path: 'skills',
    pathMatch: 'full',
    component: SkillsComponent
  },
  {
    path: 'education',
    pathMatch: 'full',
    component: EducationComponent
  },
  {
    path: 'experience',
    pathMatch: 'full',
    component: ExperienceComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent
  }
];
