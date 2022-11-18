import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  coursesUrl = "url"
  subjectsUrl = "url"
  studentsUrl = "url"

  teachers = [{
                "id":"1000",
                "Name":"Teacher1",
                "birthday": "15/12/1995",
                "salary": "1500",
                
              },
              {
                "id":"1001",
                "name":"Teacher2",
                "birthday": "28/5/1998",
                "salary": "1700",
              },
              {
                "id":"1002",
                "name":"Teacher3",
                "birthday": "20/09/1989",
                "salary": "1300",
              },
              {
                "id":"1003",
                "name":"Teacher4",
                "birthday": "11/10/1992",
                "salary": "1450",
              }];

  students = [{
    "id":"1",
    "name": "student1",
    "birthday": "16/02/1999",
    "registrationNumber":"1234561",
    "course":"computer science"

  },
{
  "id":"2",
    "name": "student2",
    "birthday": "14/09/2002",
    "registrationNumber":"1234562",
    "course":"computer science"
},
{
  "id":"3",
  "name": "student3",
  "birthday": "23/04/2001",
  "registrationNumber":"1234563",
  "course":"comptuer science"
},
{
  "id":"4",
  "name": "student4",
  "birthday": "25/03/2004",
  "registrationNumber":"1234564",
  "course":"biology"
},
{
  "id":"5",
    "name": "student5",
    "birthday": "1/05/2001",
    "registrationNumber":"1234565",
    "course":"computer science"
},
{
  "id":"6",
    "name": "student6",
    "birthday": "117/08/2004",
    "registrationNumber":"1234566",
    "course":"biology"
},
{
  "id":"7",
    "name": "student7",
    "birthday": "19/12/2000",
    "registrationNumber":"1234567",
    "course":"maths"
},
{
  "id":"8",
    "name": "student8",
    "birthday": "17/06/1999",
    "registrationNumber":"1234568",
    "course":"maths"
},
{
  "id":"9",
    "name": "student9",
    "birthday": "10/03/2005",
    "registrationNumber":"1234569",
    "course":"computer science"
},
{
  "id":"10",
    "name": "student10",
    "birthday": "26/09/2003",
    "registrationNumber":"1234510",
    "course":"maths"
}];
courses = [{
  "id":"1",
  "label":"computer science",
  "teacherNumber":"2",
  "studentNumber":"3",
  "avgGrade":"19"
},
{
  "id":"2",
  "label":"biology",
  "teacherNumber":"1",
  "studentNumber":"2",
  "avgGrade":"15"
},
{
  "id":"3",
  "label":"maths",
  "teacherNumber":"1",
  "studentNumber":"2",
  "avgGrade":"18"
}]
subjects = [
  {
    "id":"1",
    "label":"web dev",
    "teacher":"Teacher1",
    "studentNumber":"2",
    "course":"computer science"
  },
  {
    "id":"2",
    "label":"mobile dev",
    "teacher":"Teacher2",
    "studentNumber":"2",
    "course":"computer science"
  },
  {
    "id":"3",
    "label":"micro cellular",
    "teacher":"Teacher3",
    "studentNumber":"2",
    "course":"biology"
  },
  {
    "id":"4",
    "label":"numeric analysis",
    "teacher":"Teacher4",
    "studentNumber":"2",
    "course":"maths"
  },
  {
    "id":"5",
    "label":"data science",
    "teacher":"Teacher2",
    "studentNumber":"3",
    "course":"computer science"
  },
  {
    "id":"6",
    "label":"water science",
    "teacher":"Teacher3",
    "studentNumber":"2",
    "course":"biology"
  }
]
grades = [{
  'id':'1',
  'subject':'web dev',
  'grade':'15'
},
{
  'id':'2',
  'subject':'mobile dev',
  'grade':'17'
},
{
  'id':'3',
  'subject':'data science',
  'grade':'18'
}]
  constructor(private http:HttpClient) { }

  getSubjects(){
    return this.subjects
    // return this.http.get<any>(this.subjectsUrl);
  }
  getCourses(){
    return this.courses;
    // return this.http.get<any>(this.coursesUrl);
  }
  getStudents(){
    return this.students;
    // return this.http.get<any>(this.studentsUrl);
  }

  getGrades(){
    return this.grades;
  }

}
