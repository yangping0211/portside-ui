import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class SessionService {

	constructor(private http: Http) {
	}

	getSessions() {
		return this.http.get('https://api.github.com/orgs/jsug-projects/repos').map((response: Response) => {
			return response.json();
		});
	}

	addAttendee() {
	}
}