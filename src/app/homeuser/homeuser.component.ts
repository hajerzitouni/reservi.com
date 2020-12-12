import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {User} from '../model/user';
import {FilmService} from '../services/film.service';
import {UserService} from '../services/user.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {ReservationService} from '../services/reservation.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  film: Film;
  listProducts: Film [];
  currentUser: User;
  heroes$: Observable<  Film[]>;
  t: string;
  private searchTerms = new Subject<string>();

  constructor(private filmService: FilmService , private Service: UserService , private s: ReservationService ) {
  }
  search(term: string): void {
    this.searchTerms.next(term);
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
  searchby()
  {
    this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.filmService.searchHeroes(term)),
    );
  }
}
