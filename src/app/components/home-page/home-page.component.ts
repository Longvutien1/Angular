import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
 
  
})
export class HomePageComponent implements OnInit {
   username:string = JSON.parse(String(localStorage?.getItem("user"))).user.username;
  constructor() { }
  
  ngOnInit(): void {
    console.log(JSON.parse(String(localStorage?.getItem("user"))).user.username);
    
  }
  
}
