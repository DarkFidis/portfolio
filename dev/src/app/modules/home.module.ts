import { NgModule } from '@angular/core';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HOME_ROUTING } from '../routes/home.routing';

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTING)
  ]
})

export class HomeModule { }
