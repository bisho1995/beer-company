import { Injectable, OnInit, style } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BootstrapService } from '../services/bootstrap.service';

@Injectable()
export class BeermanagerService {

 private allBeers = this.bootstrapService.getAllBeers();
 public beers = this.bootstrapService.getAllBeers();
 public beerChange = new Subject();

  constructor(private bootstrapService: BootstrapService) { }


  searchBox(query) {
    const queries = query.toLowerCase().split(' ');
    this.beers = this.beers.filter(beer => {
       const name = beer.name.toLowerCase();
       for (let i = 0; i < queries.length ; i++) {
        if (name.includes(queries[i])) {
          return true;
        }
       }
    });
    this.beerChange.next(this.beers);
  }

  clearFilters() {
    this.beers = this.allBeers;
    this.beerChange.next(this.beers);
  }

 sortViaAlcohol(asc = true) {
  if (asc === false) {
    this.beers = this.beers.sort((a, b) =>  b.abv - a.abv);
  } else {
    this.beers = this.beers.sort((a, b) =>  a.abv - b.abv );
  }
  this.beerChange.next(this.beers);

  }

  filterStyle(styleName: string) {
    this.beers = this.allBeers.filter(beer => beer.style === styleName);
    this.beerChange.next(this.beers);
  }

  getAllStyles() {
    const seenStyles = {};
    for (let i = 0; i < this.allBeers.length ; i++) {
      if (!(this.allBeers[i].style in seenStyles)) {
        seenStyles[this.allBeers[i].style] = this.allBeers[i].style;
      }
    }
    const styles = [];
    for (const property in seenStyles) {
      if (seenStyles.hasOwnProperty(property)) {
        styles.push(seenStyles[property]);
      }
    }
    return styles;
  }

}
