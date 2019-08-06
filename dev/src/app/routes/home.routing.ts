import { Route } from '@angular/router';

import { PresentationComponent } from '../components/presentation/presentation.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ContactComponent } from '../components/contact/contact.component';

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
