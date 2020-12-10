import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {FilmService} from '../services/film.service';
import {ActivatedRoute} from '@angular/router';
import {Film} from '../model/film';
//import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
@ViewChild('content') content: ElementRef;

  film: Film;
  constructor(private filmService: FilmService, private service: ActivatedRoute) { }

  ngOnInit(): void {
    //this.filmService.getFilmById(id).subscribe( film =>  this.film = film);
    this.film = new Film();
    const id = this.service.snapshot.paramMap.get('id');
    this.filmService.getFilmById(id).subscribe( film =>  this.film = film);
    console.log(id);

  }
/*public downloadpdf()
{
  const doc = new jsPDF();
  const specialElelenthandlers = {
    '#editor' : function(elment , renderer ) {
return true;
    }
  };
  const content = this.content.nativeElement;
  doc.fromHTML(content.innerhtml, 15, 15,
  {
    'width': 190,
    'elelenthandlers': specialElelenthandlers
  });
  doc.save('test.pdf');
}*/

  generatePDF() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');

    });
    console.log('ok');
  }
}
