import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../model/film';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../model/user';
import {Reservation} from '../model/reservation';

import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users';

  urll = 'http://localhost:3000/register';
  urlll = 'http://localhost:3000/login';
  private currentUserSubject: BehaviorSubject<User>;
   public currentUser: Observable<User>;
    currentuser: User ;
    constructor(private http: HttpClient , private route: Router
  ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
  postuser(user: User) {
    return this.http.post<User>(this.urll, user);
  }
  postlogin(user: User) {
    return this.http.post<User>(this.urlll, user)
  .pipe(map(user1 => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user1));
      this.currentUserSubject.next(user1);
     // this.route.navigate(['/homeuser']);
      return user1;


    }));

  }
    /*userLogin(user: User){
        return this.http.post<User>(this.urlll, user).pipe(
            tap( _ => this.searchUser(user)),
            catchError((err) => {
                console.error(err);
                return throwError(err); } ));
    }*/

    searchUser(user: User) {
        console.log('search user started');
        this.getUsers().subscribe(
            data => {
                data.forEach(value => {
                    // console.log(value);
                    if (value.email === user.email){
                        this.currentuser = value;
                        console.log('current user:' + JSON.stringify(this.currentuser));
                        localStorage.setItem('currentUser', JSON.stringify(this.currentuser));
                        if (this.currentuser.firstname === 'admin')
                        {
                            this.route.navigate(['/home']);
                        }

                        else
                        {
                            this.route.navigate(['/homeuser']);
                        }
                    }
                });
            }
        );
    }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
 public  getUsername() {
    return JSON.parse(localStorage.getItem('currentUser')).email;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    //this.route.navigate(['/login']);
  }

  getUsers(){
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.url).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
    );
  }
    delete(user: User): Observable<User>{
        return this.http.delete<User>(this.url + '/' + user.id).pipe(
            catchError((err) => {
                console.error(err);
                return throwError(err);
            })
        );
    }
}
