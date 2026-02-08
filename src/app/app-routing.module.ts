import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Init } from 'src/app/init/init';
import { Login } from 'src/app/login/login';
import { Games } from './games/games';
import { RestrictMenu } from './restrict/restrict-menu/restrict-menu';

const routes: Routes = [
  { path: 'init', component: Init },
  { path: 'login', component: Login },
  { path: 'games', component: Games },
  { path: 'restrict-menu', component: RestrictMenu} ,
  { path: '', redirectTo: 'init', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}