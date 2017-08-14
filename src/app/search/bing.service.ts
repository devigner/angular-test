// Imports
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BingResult} from './bing.model';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const headers = new Headers({
    'Ocp-Apim-Subscription-Key': '792eb298b5884c9ca7a45335bcfb414d'
});

const endpoint = 'https://api.cognitive.microsoft.com/bing/v5.0/search?mkt=nl-nl&q=';

@Injectable()
export class BingService {

    constructor(private http: Http) {
    }

    searchBing(query): Observable<BingResult> {
        return this
            .http.get(endpoint + query, {headers: headers})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
