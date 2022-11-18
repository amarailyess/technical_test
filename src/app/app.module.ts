import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { CoursesListComponent } from './content/courses-list/courses-list.component';
import { SubjectsListComponent } from './content/subjects-list/subjects-list.component';
import { StudentsListComponent } from './content/students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GradesComponent } from './content/grades/grades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    CoursesListComponent,
    SubjectsListComponent,
    StudentsListComponent,
    GradesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
