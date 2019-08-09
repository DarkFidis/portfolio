import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PROJECTS_ROUTING } from '../routes/projets.routing'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PROJECTS_ROUTING)
  ]
})
export class ProjetsModule { }
