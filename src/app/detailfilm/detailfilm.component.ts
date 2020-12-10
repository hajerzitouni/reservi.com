import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {FilmService} from '../services/film.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailfilm',
  templateUrl: './detailfilm.component.html',
  styleUrls: ['./detailfilm.component.css']
})
export class DetailfilmComponent implements OnInit {

  film: Film;
  listProducts: Film [];

  constructor(private filmService: FilmService , private service: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.film = new Film();
    this.filmService.getFilmById(this.service.snapshot.params.id).subscribe( film =>  this.film = film);
  }


}
