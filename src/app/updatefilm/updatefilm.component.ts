import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {FilmService} from '../services/film.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service'; // import router from angular router
@Component({
  selector: 'app-updatefilm',
  templateUrl: './updatefilm.component.html',
  styleUrls: ['./updatefilm.component.css']
})
export class UpdatefilmComponent implements OnInit {

  film: Film;



  constructor(private filmService: FilmService, private service: ActivatedRoute, private route: Router , private Service: UserService) {
  }

  ngOnInit(): void {
    this.film = new Film();
    this.filmService.getFilmById(this.service.snapshot.params.id).subscribe( film =>  this.film = film);
  }

  save(){
    this.filmService.putFilm(this.film).subscribe(
        film =>  this.film = film,
        error1 => {
          console.error('error updating ');
        }
    );
    this.route.navigate(['/home']);
  }

  logout()
  {
    this.Service.logout();
    //console.log(this.currentUser);
  }
}
