import { NgModule } from '@angular/core';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { RouterModule } from '@angular/router';

import { HOME_ROUTING } from '../routes/home.routing';

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    RouterModule.forChild(HOME_ROUTING)
  ]
})

export class HomeModule { }
