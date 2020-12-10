import { Injectable } from '@angular/core';

import {Reservation} from '../model/reservation';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Film} from '../model/film';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient ) {
  }


  postreservation(reservation: Reservation, film: Film ) {
    return this.http.post<Reservation>(this.url + '/' + film.id, Reservation );

  }

  post(reservation: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(this.url, reservation).pipe(
          catchError((err) => {
              console.error(err);
              return throwError(err);
          })
      );
  }
    getAllreservation(): Observable<Reservation[]>{
      return this.http.get<Reservation[]>(this.url).pipe(
          catchError((err) => {
            console.error(err);
            return throwError(err);
          })
      );
  }
}
