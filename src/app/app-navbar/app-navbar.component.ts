import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service.service';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  public isLogin: boolean;
  public userName : string;
  public userMail : string;
  public userPhoto: string;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userMail = auth.email;
        this.userPhoto = auth.photoURL;
      }else{
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }
}