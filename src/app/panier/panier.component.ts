import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {ReservationService} from '../shared/reservation.service';
import {User} from '../model/user';
import {Reservation} from '../model/reservation';
import {FilmService} from '../shared/film.service';
import {Film} from '../model/film';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  list: Reservation [];
  list1: Reservation [];
  currentUser: User;
  reser: Reservation;
  f: Film;

  constructor(private Service: UserService, private s: ReservationService, private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.Service.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
    this.s.getreservationbyuserid(this.currentUser.id);
    this.s.getpanier(this.currentUser.id).subscribe(list => this.list = list);


  }


  logout()
  {
    this.Service.logout();
    console.log(this.currentUser);
  }

}

