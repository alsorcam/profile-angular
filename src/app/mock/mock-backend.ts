import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { MockData } from './mock-data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: any[] = MockData.users || [];
        const languages: any[] = MockData.languages || [];

        // Wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // Get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                const urlParts = request.url.split('/');
                const id = parseInt(urlParts[urlParts.length - 1], 10);
                const matchedUsers = users.filter(item => item.id === id);
                const user = matchedUsers.length ? matchedUsers[0] : null;
                return of(new HttpResponse({ status: 200, body: user }));
            }
            // Get user language
            if (request.url.match(/\/users\/\d+\/languages$/) && request.method === 'GET') {
                const urlParts = request.url.split('/');
                const id = parseInt(urlParts[urlParts.length - 2], 10);
                const matchedLanguages = languages.filter(item => item.user_id === id);
                const langs = matchedLanguages.length ? matchedLanguages : null;
                return of(new HttpResponse({ status: 200, body: matchedLanguages }));
            }
            // Get user qualifications
            if (request.url.match(/\/users\/\d+\/qualifications$/) && request.method === 'GET') {
                const qualificationsItem = this.getItemFromArray(request.url, MockData.qualifications || []);
                return of(new HttpResponse({ status: 200, body: qualificationsItem }));
            }
            // Get user geographical cover
            if (request.url.match(/\/users\/\d+\/geographical-cover$/) && request.method === 'GET') {
                const geoItem = this.getItemFromArray(request.url, MockData.geographical_cover || []);
                return of(new HttpResponse({ status: 200, body: geoItem }));
            }
            // Get user bank account
            if (request.url.match(/\/users\/\d+\/bank-account$/) && request.method === 'GET') {
                const bankItem = this.getItemFromArray(request.url, MockData.bank_account || []);
                return of(new HttpResponse({ status: 200, body: bankItem }));
            }
            // Pass through any requests not handled above
            return next.handle(request);
        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }

    private getItemFromArray(url: string, array: any[]): any {
        const urlParts = url.split('/');
        const id = parseInt(urlParts[urlParts.length - 2], 10);
        const matchedItems = array.filter(itemArray => itemArray.user_id === id);
        const item = matchedItems.length ? matchedItems[0] : null;
        return item;
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
