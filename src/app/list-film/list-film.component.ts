import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {FilmService} from '../services/film.service';
import {UserService} from '../services/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  film: Film;
  listProducts: Film [];
  currentUser: User;
  constructor(private filmService: FilmService , private Service: UserService) {
  }
   /* startSearch() {
        const action = ( film: Film) => {
            console.log(film);
        } ;
        this.filmService.search(action,'test' );
    }*/
  ngOnInit(): void {
    this.film = new Film();
    this.filmService.getAllfilms().subscribe(listProducts => this.listProducts = listProducts);
    this.Service.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }

  delete(film ){
    this.filmService.deleteFilm(film).subscribe(
        () => this.listProducts = this.listProducts.filter( f => f.id !== film.id)
    );
  }

}
