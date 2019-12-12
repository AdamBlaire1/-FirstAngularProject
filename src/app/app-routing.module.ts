import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTasksComponent } from './modules/tasks/display-tasks/display-tasks.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'tasks',
    component: DisplayTasksComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
