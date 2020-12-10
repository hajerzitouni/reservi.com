import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Film} from '../model/film';
import {FilmService} from '../services/film.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes$: Observable<  Film[]>;
  private searchTerms = new Subject<string>();

  constructor(private filmService: FilmService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
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
