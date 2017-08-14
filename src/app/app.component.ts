import {Component} from '@angular/core';
import {BingService} from './search/bing.service';
import {BingResult} from './search/bing.model';

export class Search {
    query: string;
}

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
    results = new BingResult();

    constructor(private bingService: BingService) {

    }

    onSearch() {
        this.bingService.searchBing(this.search.query)
            .subscribe(
                (result) => {
                    this.results = result;
                },
                (err) => {
                    console.log(err)
                }
            )
        ;
    }
}
