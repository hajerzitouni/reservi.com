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
    urll = 'http://localhost:3000/reservations?userid';
    body = { filmId : 5} ;
  constructor(private http: HttpClient ) {
  }

  postreservation(reservation: Reservation) {

    return this.http.post<Reservation>(this.url + '/' , reservation );


  }

    getreservationbyuserid(id): Observable<Reservation>{
        return this.http.get<Reservation>(this.url + '=' + id).pipe(
            catchError((err) => {
                console.error(err);
                return throwError(err);
            })
        );
    }
    putFilm(reservation: Reservation): Observable<Reservation>{
        return this.http.put<Reservation>(this.url + '/' + reservation.id, this.body).pipe(
            catchError((err) => {
                console.error(err);
                return throwError(err);
            })
        );
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

    getpanier(id): Observable<Reservation[]>{
        return this.http.get<Reservation[]>(this.urll + '=' + id).pipe(
            catchError((err) => {
                console.error(err);
                return throwError(err);
            })
        );
    }
}
