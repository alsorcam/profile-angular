import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Properties } from './../utils/properties';

@Injectable()
export class BackendService {
    ENDPOINT = Properties.BACKEND_SERVICES_ENDPOINT;

    constructor(private http: HttpClient) { }

    getUser(user_id: number) {
        return this.http.get(this.ENDPOINT + '/users/' + user_id);
    }

    getUserLanguages(user_id: number) {
        return this.http.get(this.ENDPOINT + '/users/' + user_id + '/languages');
    }

    getUserQualifications(user_id: number) {
        return this.http.get(this.ENDPOINT + '/users/' + user_id + '/qualifications');
    }
}
