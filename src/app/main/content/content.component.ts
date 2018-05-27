import { Component, OnInit } from '@angular/core';
import { BootstrapService } from '../../shared/services/bootstrap.service';
import { BeermanagerService } from '../../shared/services/beermanager.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private bootstrap: BootstrapService, private beerMgr: BeermanagerService) { }
  private beers;
  ngOnInit() {
    this.beers =  this.beerMgr.beers;
    this.beerMgr.beerChange.subscribe(beers => {
      this.beers = beers;
    });
  }

}
