import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTypePipe } from './time-type.pipe';

@NgModule({
  declarations: [TimeTypePipe],
  imports: [
    CommonModule
  ],
  exports: [TimeTypePipe]
})
export class PipesModule { }
