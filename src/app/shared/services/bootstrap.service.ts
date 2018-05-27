import { Injectable } from '@angular/core';
import { BeerlistService } from './beerlist.service';

@Injectable()
export class BootstrapService {

  constructor(private beerList: BeerlistService) { }

  /**
   * get list of beer from
   * api, if we already have it
   * from a past session then
   * we need not get it from server
   */
  getListOfBeers() {
    if (localStorage.getItem('beerList') === null ||
        localStorage.getItem('beerList') === undefined ||
        localStorage.getItem('beerList') === 'undefined' ||
        localStorage.getItem('beerList') === 'null') {
          this.beerList.getBeerList().subscribe((data) => {
            const beers = data.json();
            localStorage.setItem('beerList', JSON.stringify(beers));
          });
        }
  }

  getBeerWithinRange(start, end) {
    const beers = JSON.parse(localStorage.getItem('beerList'));
    const array = new Array();
    for (let i = start; i <= end; i++) {
      array.push(beers[i]);
    }
    return array;
  }

  getAllBeers() {
    return JSON.parse(localStorage.getItem('beerList'));
  }

}
