import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContadorComponent } from './contador/component/contador/contador.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: 'contador', pathMatch: 'full' },
  { path: 'contador', component: ContadorComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: 'contador' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
