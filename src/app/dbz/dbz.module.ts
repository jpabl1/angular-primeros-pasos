import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DBZMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    DBZMainPageComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DBZMainPageComponent
  ]
})

export class DbzModule { }
