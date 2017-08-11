import {Component} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {BingService} from './search/bing.service';


export class Search {
    query: string;
}

let SearchResults: Observable<BingResult[]> = [];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Search Machine';
    search: Search = {
        query: 'hotel',
    };
    status = '---';
    results = SearchResults;

    constructor(private bingService: BingService) {
    
    }

    onSearch(){
      this.results = this.bingService.searchBing(this.search.query);
    }
    
    
}
