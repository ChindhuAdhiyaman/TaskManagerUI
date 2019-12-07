import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTaskComponent} from "./task/add-task/add-task.component";
import {ViewTaskComponent} from "./task/view-task/view-task.component";
import {EditTaskComponent} from "./task/edit-task/edit-task.component";

const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'view-task', component: ViewTaskComponent },
  { path: 'edit-task', component: EditTaskComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
