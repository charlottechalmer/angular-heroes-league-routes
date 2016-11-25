import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		
		<p *ngIf="this.authService.user">
			Welcome, {{this.authService.user.username}}!
		</p>

		<nav>
			<a routerLink="/" routerLinkActive="active">Home</a>
			<a routerLink="/league" routerLinkActive="active">League</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	constructor (public authService: AuthService) { }
}
