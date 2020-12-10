import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../model/user';

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
  constructor(private Service: UserService) { }

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

}
