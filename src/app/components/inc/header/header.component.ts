import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string = JSON.parse(String(localStorage?.getItem("user"))).user.username;
  constructor() { }
  
  ngOnInit(): void {
    console.log(JSON.parse(String(localStorage?.getItem("user"))).user.username);
    
  }

}
