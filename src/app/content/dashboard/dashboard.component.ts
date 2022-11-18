import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbUsers:number=52;
	nbDoctors:number=10;
	nbArticles:number=17;
	nbAppointments:number=5;
	notificationList=[
	{
		content:"Sign contract for What are conference organizers afraid of?",

	},
	{
		content:"Lines From Great Russian Literature? Or E-mails From My Boss?",

	},
	{
		content:"Create 4 Invisible User Experiences you Never Knew About",

	}
	]
	userList=[
	{
		id:1,
		name:"Dakota Rice",
		country:"Niger",
		

	},
	{
		id:2,
		name:"Minerva Hooper",
		country:"Curaçao",
		

	}
	]
	doctorList=[
  {
    id:1,
    name:"Dakota Rice",
    country:"Niger",
    

  },
  {
    id:2,
    name:"Minerva Hooper",
    country:"Curaçao",
    

  },
  {
    id:1,
    name:"Dakota Rice",
    country:"Niger",
    

  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
