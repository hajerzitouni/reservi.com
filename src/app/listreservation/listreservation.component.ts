import { Component, OnInit } from '@angular/core';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../shared/reservation.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})
export class ListreservationComponent implements OnInit {


  list: Reservation [];
  bookName = 'logo';
  bookPictureUrl = '../../assets/images/reservi (3).png';
  constructor(private Service: ReservationService, private Servicee: UserService ,  private route: Router) { }

  ngOnInit(): void {
    this.Service.getAllreservation().subscribe(list => this.list = list);
  }
  logout()
  {
    this.Servicee.logout();
    // console.log(this.currentUser);
    this.route.navigate(['/login']);

  }
}
