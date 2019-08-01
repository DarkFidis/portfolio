import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class LayoutModule { }
