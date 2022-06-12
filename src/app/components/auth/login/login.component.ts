import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/Products';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users!: IUser[];
  user:IUser = {
    email: "",
    password: ""
  }
  constructor(
    private userService: UserService,
    private route:Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
   
    try {
      console.log(this.user);
      // call service userSerive register
       const register = this.userService.login(this.user).subscribe(data => {
        localStorage.setItem("user", JSON.stringify(data))
        alert("Login Successfully !");
    
        // chuyển hướng tới login
        this.route.navigateByUrl("/");
        // if (!data) {
        //   alert("Lỗi rồi")
        // }
      })
    
    } catch (error) {
      console.log("Lỗi rồi");
      
    }
  }

}
