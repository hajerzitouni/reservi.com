import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  list: User[];
  currentUser: User;
  u: string;
//user1: User ;
  data: string;
  constructor(private Service: UserService , private route: Router) {
  }

  ngOnInit(): void {
    this.user = new User();
    // this.Service.getAllreservation().subscribe(list => this.list = list);
  }


  add() {
    this.Service.postlogin(this.user).subscribe(
        user => this.user = user
    );
    this.Service.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);

   // localStorage.setItem('currentUser', JSON.stringify(this.user1));

    this.u = JSON.parse(localStorage.getItem('currentUser')).email;
    console.log(this.u);
    /*this.data = localStorage.getItem('id');
    console.log(this.data );*/
    //this.route.navigate(['/homeuser']);
    //console.log(this.user1);
    this.Service.searchUser(this.user);



  }



}
