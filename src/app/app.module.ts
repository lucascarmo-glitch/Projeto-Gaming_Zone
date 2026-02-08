import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { RestrictRoutingModule } from './restrict/restrict.routing.module';
import { AppComponent } from './app.component';

/* Componentes */
import { Init } from 'src/app/init/init';
import { Login } from 'src/app/login/login';
import { Menu } from 'src/app/menu/menu';
import { Footer } from 'src/app/footer/footer';
import { Games } from './games/games';

/* Restrict Componentes */
import { RestrictMenu } from './restrict/restrict-menu/restrict-menu';
import { GamesList } from './restrict/games-list/games-list';
import { GamesRegister } from './restrict/games-register/games-register';
import { GamesUpdate } from './restrict/games-update/games-update';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RestrictRoutingModule,
    AppRoutingModule,
    Init,
    Login,
    Menu,
    Footer,
    Games,
    RestrictMenu,
    GamesList,
    GamesUpdate,
    GamesRegister,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule { }