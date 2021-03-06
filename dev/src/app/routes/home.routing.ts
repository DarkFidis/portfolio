import { Route } from '@angular/router';

import { PresentationComponent } from '../components/home/presentation/presentation.component';
import { SkillsComponent } from '../components/home/skills/skills.component';
import { EducationComponent } from '../components/home/education/education.component';
import { ExperienceComponent } from '../components/home/experience/experience.component';
import { ContactComponent } from '../components/home/contact/contact.component';
import { SignupComponent } from '../components/home/signup/signup.component';
import { SigninComponent } from '../components/home/signin/signin.component';

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
  },
  {
    path: 'signin',
    pathMatch: 'full',
    component: SigninComponent
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent
  }
];
