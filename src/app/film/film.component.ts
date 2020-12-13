import { Component, OnInit } from '@angular/core';
import {Film} from '../model/film';
import {FilmService} from '../shared/film.service';
import {UserService} from '../shared/user.service';
class ImageSnippet {
    pending = false;
    status = 'init';
    constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

    film: Film;
    listProducts: Film [];
  title = 'Add Movie';
    bookName = 'logo';
    bookPictureUrl = '../../assets/images/reservi (3).png';
    selectedFile: ImageSnippet;

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
    processFile(imageInput: any) {
        const file: File = imageInput.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event: any) => {

            this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(this.selectedFile.src);

            this.selectedFile.pending =true ;  });

        reader.readAsDataURL(file);
    }

    add() {
        this.film.image = this.selectedFile.src;
        this.filmService.postFilm(this.film).subscribe(
            () => this.listProducts = [this.film, ...this.listProducts]
        );
        console.log(this.film);
    }

    logout()
    {
        this.Service.logout();
        //cconsole.log(this.currentUser);
    }

    onFileChanged(event) {
        const file = event.target.files[0]
    }
}
