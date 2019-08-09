import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PROJECTS_ROUTING } from '../routes/projets.routing';

import { ProjectListComponent } from '../components/project-list/project-list.component';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROJECTS_ROUTING)
  ]
})
export class ProjetsModule { }
