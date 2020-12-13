import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  list: User [];
  user: User;
  priceMax: number;
  currentItem = 'Television';
  bookName = 'logo';
  bookPictureUrl = '../../assets/images/reservi (3).png';
  constructor(private Service: UserService, private Servicee: UserService , private route: Router ) { }

  ngOnInit(): void {
  this.Service.getUsers().subscribe(
        (data: User []) => this.list = data
    );
  this.user  = new  User() ;
  }
  delete(user){
    this.Service.delete(user).subscribe(
        () => this.list = this.list.filter( f => f.id !== user.id)
    );
  }
  logout()
  {
    this.Servicee.logout();
   // console.log(this.currentUser);
    this.route.navigate(['/login']);
  }

}
