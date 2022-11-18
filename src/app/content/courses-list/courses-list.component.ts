import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  coursesList:any = []
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.coursesList = this.dataService.getCourses();
  //   this.dataService.getCourses().subscribe(
  //     result =>{
  //       this.coursesList = result
  //     },
  //     error =>{
  //       console.log(error)
  //     }
  //   );



}
}
