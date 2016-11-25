// app-routing.module.ts

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroViewComponent } from "./hero-view.component";
import { LeagueViewComponent } from "./league-view.component";
import { HeroDetailComponent } from './hero-detail.component';
import { LoginComponent } from './login.component';

import { AuthService } from './auth.service';

const routes: Routes = [
	{path: '', component: HeroViewComponent},
	{
		path: 'league', 
		component: LeagueViewComponent,
		canActivate: [AuthService]
	},
	{path: 'hero/:id', component: HeroDetailComponent},
	{path: 'login', component: LoginComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { 
	constructor( private authService: AuthService) {  }
}
