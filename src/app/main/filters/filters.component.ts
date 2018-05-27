import { Component, OnInit } from '@angular/core';
import { BeermanagerService } from '../../shared/services/beermanager.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  private alcohol: string;
  private styles: any;
  private style: any;
  constructor(private beermanager: BeermanagerService) { }

  ngOnInit() {
    this.styles = this.beermanager.getAllStyles();
  }

  clearFilters() {
    this.beermanager.clearFilters();
  }

  toggleAlcohol() {
    if (this.alcohol === '1') {
      this.beermanager.sortViaAlcohol(true);
    } else {
      this.beermanager.sortViaAlcohol(false);
    }
  }

  styleChange() {
    this.beermanager.filterStyle(this.style);
  }

}
