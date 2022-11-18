import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades:any = []
  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.grades = this.dataService.getGrades();
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
