import { Component, OnInit } from '@angular/core';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../services/reservation.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})
export class ListreservationComponent implements OnInit {


  list: Reservation [];
  constructor(private Service: ReservationService, private Servicee: UserService) { }

  ngOnInit(): void {
    this.Service.getAllreservation().subscribe(list => this.list = list);
  }
  logout()
  {
    this.Servicee.logout();
    // console.log(this.currentUser);
  }
}
