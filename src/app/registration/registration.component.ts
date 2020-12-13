import { Component, OnInit } from '@angular/core';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../shared/reservation.service';
import {User} from '../model/user';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User;
  list: User[];

  constructor(private Service: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.user = new User();
   // this.Service.getAllreservation().subscribe(list => this.list = list);
  }


  add() {
      this.Service.postuser(this.user).subscribe(
          user => this.user = user
      );
      alert('your registration is done');
      console.log(this.user);
      this.route.navigate(['/login']);
  }

  /*add() {
    this.Service.postreservation(this.reservation).subscribe(
        () => this.list = [this.reservation, ...this.list]
    );
    console.log(this.reservation);
  }*/




}
