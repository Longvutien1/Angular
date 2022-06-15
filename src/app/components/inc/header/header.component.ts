import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // username:string = JSON.parse(String(localStorage?.getItem("user"))).user?.username || '';
  username!: string;
  constructor() { }
  
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user")!);
    if(user) {
      this.username = user.username;
    }
    // console.log(JSON.parse(String(localStorage?.getItem("user"))).user?.username);
    
  }

}
