import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Properties } from './../utils/properties';

@Injectable()
export class BackendService {
    ENDPOINT = Properties.BACKEND_SERVICES_ENDPOINT;

    constructor(private http: HttpClient) { }

    getUser(user_id: number): Observable<any> {
        return this.http.get(this.ENDPOINT + '/users/' + user_id);
    }

    getUserLanguages(user_id: number): Observable<any[]> {
        return this.http.get<any[]>(this.ENDPOINT + '/users/' + user_id + '/languages');
    }

    getUserQualifications(user_id: number): Observable<any> {
        return this.http.get(this.ENDPOINT + '/users/' + user_id + '/qualifications');
    }

    getUserGeographicalCover(user_id: number): Observable<any> {
        return this.http.get(this.ENDPOINT + '/users/' + user_id + '/geographical-cover');
    }

    getUserBankAccount(user_id: number): Observable<any> {
        return this.http.get(this.ENDPOINT + '/users/' + user_id + '/bank-account');
    }

    getUserServices(user_id: number): Observable<any[]> {
        return this.http.get<any[]>(this.ENDPOINT + '/users/' + user_id + '/services');
    }
}
