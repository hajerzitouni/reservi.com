import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../shared/reservation.service';
import {Film} from '../model/film';
import {Reservation} from '../model/reservation';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-showreservation',
  templateUrl: './showreservation.component.html',
  styleUrls: ['./showreservation.component.css']
})
export class ShowreservationComponent implements OnInit {
reservation: Reservation;
  currentUser: User;
  bookName = 'logo';
  bookPictureUrl = '../../assets/images/reservi (3).png';
  constructor(private Service: ReservationService, private service: ActivatedRoute,private Serviceuser: UserService , private route : Router ) { }

  ngOnInit(): void {
    this.reservation = new Reservation();
    this.Service.getreservationById(this.service.snapshot.params.id).subscribe( reservation =>  this.reservation = reservation);
    this.Serviceuser.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }
  logout()
  {
    this.Serviceuser.logout();
    console.log(this.currentUser);
    this.route.navigate(['/login']);
  }

}
