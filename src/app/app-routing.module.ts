import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveComponent } from './pages/active/active.component';
import { TestComponent } from './pages/test/test.component';
import { MainComponent } from './pages/main/main.component';



const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
