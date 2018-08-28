import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import * as mock_data from './mock-data';

export function httpFactory(backend: MockBackend, options: BaseRequestOptions) {

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            if (connection.request.url.endsWith('/api/rest/user') && connection.request.method === RequestMethod.Get) {
                console.log('mockBackend - get user');
                const user = mock_data.users.filter(item => item.id = 1);
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        status: 200,
                        body: user
                    })
                ));
            }
        }, 500);
    });
    return new Http(backend, options);
}

export let mockBackendProvider = {
    provide: Http,
    useFactory: httpFactory,
    deps: [MockBackend, BaseRequestOptions]
};
