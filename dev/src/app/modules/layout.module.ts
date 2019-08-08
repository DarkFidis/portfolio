import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  FontAwesomeModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class LayoutModule { }
