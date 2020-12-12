import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { UpdatefilmComponent } from './updatefilm/updatefilm.component';
import { DetailfilmComponent } from './detailfilm/detailfilm.component';
import {ReserverComponent} from './reserver/reserver.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { TicketComponent } from './ticket/ticket.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { ListreservationComponent } from './listreservation/listreservation.component';
import { PanierComponent } from './panier/panier.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ListFilmComponent,
    UpdatefilmComponent,
    DetailfilmComponent,
    ReserverComponent,
    RegistrationComponent,
    LoginComponent,
    HomeuserComponent,
    TicketComponent,
    ListuserComponent,
    UserComponent,
    SearchComponent,
    ListreservationComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
