import { Injectable } from "@angular/core";

import { Router,
	CanActivate, 
	ActivatedRouteSnapshot, 
	RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
	constructor(private router: Router) {  }

	public user = undefined;
	// normally this would be provided by the server but we don't have a server, so we've hardcoded this in to save time

	public canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
		): boolean {
			if (this.user === undefined) {
				this.router.navigate(["/login"]);
				return false;
			}
			return true;
	}
}

