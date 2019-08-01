import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout.module';

import { HeaderComponent } from '../components/header/header.component';

const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class CoreModule { }
