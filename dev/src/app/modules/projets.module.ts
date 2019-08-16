import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PROJECTS_ROUTING } from '../routes/projets.routing';
import { AuthGuard } from '../guards/auth.guard';

import { ProjectListComponent } from '../components/projects/project-list/project-list.component';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROJECTS_ROUTING)
  ],
  providers: [AuthGuard]
})
export class ProjetsModule { }
