import { Route } from '@angular/router';
import { PresentationComponent } from '../components/presentation/presentation.component';

export const HOME_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: PresentationComponent
  }
];
