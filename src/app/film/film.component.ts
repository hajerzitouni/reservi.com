import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {FilmService} from '../services/film.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

    film: Film;
    listProducts: Film [];

    constructor(private filmService: FilmService , private Service: UserService) {
    }

    ngOnInit(): void {
        this.film = new Film();
        this.filmService.getAllfilms().subscribe(listProducts => this.listProducts = listProducts);
    }


   /* add() {
        this.filmService.postFilm(this.film).subscribe(
            film => this.film = film
        );
        alert('ajouté');
    }*/

    add() {

        this.filmService.postFilm(this.film).subscribe(
            () => this.listProducts = [this.film, ...this.listProducts]
        );
        console.log(this.film);
    }

    logout()
    {
        this.Service.logout();
        //console.log(this.currentUser);
    }
}
