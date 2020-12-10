import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFilmComponent} from './list-film/list-film.component';
import {FilmComponent} from './film/film.component';
import {UpdatefilmComponent} from './updatefilm/updatefilm.component';
import {DetailfilmComponent} from './detailfilm/detailfilm.component';
import {ReserverComponent} from './reserver/reserver.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {HomeuserComponent} from './homeuser/homeuser.component';
import {TicketComponent} from './ticket/ticket.component';
import {ListuserComponent} from './listuser/listuser.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
    {path: 'home', component:  ListFilmComponent},
    {path: 'addfilm', component:  FilmComponent},
    {path: 'updatefilm/:id', component:  UpdatefilmComponent},
    {path: 'Detailfilm/:id', component:   DetailfilmComponent},
    {path: 'reserver/:id', component:   ReserverComponent },
    {path: 'register', component:  RegistrationComponent },
    {path: 'login', component:  LoginComponent},
    {path: 'homeuser', component:  HomeuserComponent},
    {path: 'ticket/:id', component: TicketComponent},
    {path: 'list', component: ListuserComponent},
    {path: 'search', component: SearchComponent },
    {path: '**', component:  LoginComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
