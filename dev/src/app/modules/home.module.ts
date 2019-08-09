import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout.module';

import { PresentationComponent } from '../components/home/presentation/presentation.component';
import { SkillsComponent } from '../components/home/skills/skills.component';
import { EducationComponent } from '../components/home/education/education.component';
import { ExperienceComponent } from '../components/home/experience/experience.component';
import { ContactComponent } from '../components/home/contact/contact.component';

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
    RouterModule.forChild(HOME_ROUTING),
    LayoutModule
  ]
})

export class HomeModule { }
