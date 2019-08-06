import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PresentationComponent } from '../components/presentation/presentation.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ContactComponent } from '../components/contact/contact.component';

import { HOME_ROUTING } from '../routes/home.routing';

@NgModule({
  declarations: [
    PresentationComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTING)
  ]
})

export class HomeModule { }
