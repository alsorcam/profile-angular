import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Properties } from './../utils/properties';

@Injectable()
export class BackendService {
  ENDPOINT = Properties.BACKEND_SERVICES_ENDPOINT;

  constructor(private readonly http: HttpClient) { }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.ENDPOINT}/users/${userId}`);
  }

  getUserLanguages(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.ENDPOINT}/users/${userId}/languages`);
  }

  getUserQualifications(userId: number): Observable<any> {
    return this.http.get(`${this.ENDPOINT}/users/${userId}/qualifications`);
  }

  getUserGeographicalCover(userId: number): Observable<any> {
    return this.http.get(`${this.ENDPOINT}/users/${userId}/geographical-cover`);
  }

  getUserBankAccount(userId: number): Observable<any> {
    return this.http.get(`${this.ENDPOINT}/users/${userId}/bank-account`);
  }

  getUserServices(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.ENDPOINT}/users/${userId}/services`);
  }
}
