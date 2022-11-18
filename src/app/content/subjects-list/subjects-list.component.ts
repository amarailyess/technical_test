import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  subjectsList:any = []
  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.subjectsList = this.dataService.getSubjects();
    // this.dataService.getCourses().subscribe(
    //   result =>{
    //     this.subjectsList = result
    //   },
    //   error =>{
    //     console.log(error)
    //   }
    // );

  }

}
