import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FilmComponent} from './film/film.component';

const routes: Routes = [
  { path: 'sign-up',  component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'movie', component: FilmComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
