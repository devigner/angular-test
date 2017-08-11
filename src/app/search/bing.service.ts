// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const headers = new Headers({
    'Ocp-Apim-Subscription-Key':'792eb298b5884c9ca7a45335bcfb414d'
});

const endpoint = 'https://api.cognitive.microsoft.com/bing/v5.0/search?mkt=nl-nl&q=';

@Injectable()
export class BingService {
    
    constructor (
        private http: Http
    ) {}
    
    searchBing(query string) :Observable<BingResult[]> {
        return this
          .http.get(endpoint + query, {headers: headers})
          .map((res:Response) => res.json())
          .subscribe(
              data => observer.next(data),
              err => observer.error(err),
              () => observer.complete()
          )
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}