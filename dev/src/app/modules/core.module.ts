import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../components/header/header.component';

const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
