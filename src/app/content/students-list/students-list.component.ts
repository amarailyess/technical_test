import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentsList:any = []
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.studentsList = this.dataService.getStudents();
    // this.dataService.getCourses().subscribe(
    //   result =>{
    //     this.studentsList = result
    //   },
    //   error =>{
    //     console.log(error)
    //   }
    // );

  }

}
