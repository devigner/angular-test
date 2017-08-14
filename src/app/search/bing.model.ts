export class BingResult {
    webPages: WebPages;
}

export class WebPages {
    value: Page[];
}

export class Page {
    id: string;
    name: string;
    url: string;
    displayUrl: string;
    snippet: string;
    dateLastCrawled: Date;
}
