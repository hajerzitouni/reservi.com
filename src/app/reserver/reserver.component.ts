import { Component, OnInit } from '@angular/core';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../shared/reservation.service';
import { Validators, FormBuilder, FormGroup,
  FormControl , FormArray } from
      '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../shared/film.service';
import {Film} from '../model/film';
import {User} from '../model/user';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  reservation: Reservation;
  list: Reservation [];
  contactForm: FormGroup;
  film: Film;
  currentUser: User;
  constructor(private Service: ReservationService, private Servicee: UserService, private route: Router , private filmService: FilmService, private service: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.reservation = new Reservation();
   // this.reservation.userid = this.currentUser.id;
    this.Service.getAllreservation().subscribe(list => this.list = list);
    this.Servicee.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);

    this.filmService.getFilmById(this.service.snapshot.params.id).subscribe( film =>  this.film = film);
    this.contactForm = new FormGroup( {
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      num: new FormControl('', Validators.pattern('[0-9]{8}')),
      date: new FormControl('', Validators.required),
      cardCode: new FormControl('', Validators.required),
      ticket: new FormControl('', Validators.required),
    });

  }




   /*add() {
       this.Service.post(this.reservation).subscribe(
           reservation => this.reservation = reservation
       );
       alert('ajouté');
      console.log(this.reservation);
   }*/

  add() {
    console.log(this.contactForm.value);
    this.reservation.userid = this.currentUser.id;
    this.reservation.filmId = this.film.id;
    this.reservation.film = this.film.title;
    Object.assign(this.reservation, this.contactForm.value);
    this.Service.postreservation(this.reservation).subscribe(
        () => this.list = [this.reservation, ...this.list]);
    console.log(this.reservation);
    /*console.log(this.film);
   // this.reservation.film = 5;
    this.Service.putFilm(this.reservation).subscribe(
        reservation =>  this.reservation = reservation,
        error1 => {
          console.error('error updating ');
        }
    );*/
    this.route.navigate(['/ticket/' + this.film.id]);
  }

  get email() {
    return this.contactForm.get('email');
  }

  get num() {
    return this.contactForm.get('num');
  }
  get code() {
    return this.contactForm.get('cardCode');
  }
  get ticket() {
    return this.contactForm.get('ticket');
  }
  get date() {
    return this.contactForm.get('date');
  }
}

