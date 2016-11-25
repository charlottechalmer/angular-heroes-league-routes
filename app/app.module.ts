import { NgModule }			from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { AppComponent }	from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from "./hero.service";
import { LeagueComponent } from "./league.component";

import { HeroViewComponent } from "./hero-view.component";
import { LeagueViewComponent } from "./league-view.component";
import { HeroTabComponent } from "./hero-tab.component";
import { LoginComponent } from "./login.component";

import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from './auth.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		HeroService,
		AuthService
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		LeagueComponent,
		HeroViewComponent,
		LeagueViewComponent,
		HeroTabComponent,
		LoginComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
