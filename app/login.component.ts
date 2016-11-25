import { Component } from "@angular/core";

import { AuthService } from './auth.service';
import { Router } from "@angular/router";


@Component({
	template: `
		Username: <input type="text" [(ngModel)]="loginUser.username">
		Password: <input type="password" [(ngModel)]="loginUser.password">
		<button (click)="sendLogin()">Login</button>

		<p *ngIf="error">{{error}}</p>
	`
})
export class LoginComponent {
	constructor(private authService: AuthService,
		private router: Router) {  }

	private loginUser = {
		username: "",
		password: "",
	};

	private error: string = "";

	private sendLogin() {
		// this.apiService.postObs("/login", this.loginUser).subscribe((res) =>
		// 	if (res.success) {
		// 		this.authService.user = res.userData;
		// 	}
		// })
		if (this.loginUser.username.length === 0) {
			this.error = "Username cannot be empty!";
		} else {
			this.authService.user = this.loginUser;
			this.router.navigate(['/league']);
		}
	}
	

}
