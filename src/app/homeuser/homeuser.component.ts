import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {User} from '../model/user';
import {FilmService} from '../services/film.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  film: Film;
  listProducts: Film [];
  currentUser: User;
  constructor(private filmService: FilmService , private Service: UserService) {
  }

  ngOnInit(): void {
    this.film = new Film();
    this.filmService.getAllfilms().subscribe(listProducts => this.listProducts = listProducts);
    this.Service.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }


  logout()
  {
    this.Service.logout();
    console.log(this.currentUser);
  }
}
