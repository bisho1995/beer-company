import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerlistService {

  private URL = 'http://starlord.hackerearth.com/beercraft';

  constructor(private http: Http) { }

  getBeerList() {
    return this.http.get(this.URL);
  }

}
