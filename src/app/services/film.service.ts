import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Film} from '../model/film';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = 'http://localhost:3000/films';
  constructor(private http: HttpClient , private messageService: MessageService) { }

  // handling erros in service
  getAllfilms(): Observable<Film[]>{
    return this.http.get<Film[]>(this.url).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
    );
  }
  getFilmById(id): Observable<Film>{
    return this.http.get<Film>(this.url + '/' + id).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
    );
  }

  /*postFilm(film: Film): Observable<Film>{
    return this.http.post<Film>(this.url, film).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
    );
  }*/
    postFilm(film: Film) {
        return this.http.post(this.url, film);
    }
  deleteFilm(film: Film): Observable<Film>{
    return this.http.delete<Film>(this.url + '/' + film.id).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
    );
  }

  putFilm(film: Film): Observable<Film>{
    return this.http.put<Film>(this.url + '/' + film.id, film).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
    );
  }
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }




    searchHeroes(term: string): Observable<Film[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        //return this.http.get<Film[]>(`${this.url}/?genre=${term}&?title=${term}`).pipe(
        return this.http.get<Film[]>(`${this.url}/?q=${term}`).pipe(
            tap(x => x.length ?
                this.log(`found heroes matching "${term}"`) :
                this.log(`no heroes matching "${term}"`)),
            catchError(this.handleError<Film[]>('searchHeroes', []))
        );
    }

//  !!! handling errors in component see save() function in update-user component

    /*search(action: (film: Film), title: string, price: number = 0): void {
        const results = {};
        const p = price ? `&p=${price}` : '';

        this.http.get(`'http://localhost:3000/films'?t=${title}${p}&plot=full`).subscribe(
            (response) => {
                action( response.json());
            });
    }*/


}



