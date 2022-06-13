import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
// import * as EventEmitter from 'events';
import { IUser } from 'src/app/models/Products';
import { UserService } from 'src/app/service/user.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Output() createProduct = new EventEmitter<{ email: string, password: string }>();
  users!: IUser[];
  user:IUser = {
    username: "",
    email: "",
    password: "",
    role: 0
  }
  constructor(
    private userService: UserService,
    private route:Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
      console.log(this.user);
      // call service userSerive register
        this.userService.register(this.user).subscribe(data => {
        alert("Register Successfully !");
       
        // chuyển hướng tới login
        this.route.navigateByUrl("/login");
        
      },error=>{
        alert("Something went wrong")
      })
     
    
  }
  
}
