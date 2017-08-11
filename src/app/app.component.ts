import { Component } from '@angular/core';



export class Search{
  query: string;
}

export class Result{
  title: string
}

const SearchResults: Result[] = [
  { title: 'Page 1' },
  { title: 'Page 2' },
  { title: 'Page 3' },
  { title: 'Page 4' },
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  search: Search = {
    query: 'hotel',
  };
  results = SearchResults;
  
  constructor(private http: Http) {
    
  }
  
  onSearch(){

    this.http.get('https://api.cognitive.microsoft.com/bing/v5.0/search?q='+this.search.query+'&mkt=nl-nl', {
      headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key','792eb298b5884c9ca7a45335bcfb414d'),
    }).subscribe( data => {
        
        console.log(data);
        
    });
    }
  }
}
