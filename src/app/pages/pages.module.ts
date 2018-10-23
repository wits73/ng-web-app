import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active/active.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActiveComponent, MainComponent, TestComponent],
  exports: [ActiveComponent, MainComponent, TestComponent]
})
export class PagesModule { }
