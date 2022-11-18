import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { CoursesListComponent } from './content/courses-list/courses-list.component';
import { SubjectsListComponent } from './content/subjects-list/subjects-list.component';
import { StudentsListComponent } from './content/students-list/students-list.component';
import { GradesComponent } from './content/grades/grades.component';
const routes: Routes = [
  {path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',},
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'courses',
      component:CoursesListComponent
    },
    {
      path:'subjects',
      component:SubjectsListComponent
    },
    {
      path:'students',
      component:StudentsListComponent
    },
    {
      path:'student/:id',
      component:GradesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
