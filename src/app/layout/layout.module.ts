import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [NavComponent, BottomComponent, ],
  exports: [NavComponent, BottomComponent, ]
})
export class LayoutModule { }
