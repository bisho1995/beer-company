import { Component, OnInit } from '@angular/core';
import { BeermanagerService } from '../../shared/services/beermanager.service';
import { BootstrapService } from '../../shared/services/bootstrap.service';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {

  private searchName: String;

  constructor(private beerManager: BeermanagerService, private bootstrapService: BootstrapService) { }

  ngOnInit() {
  }

  search() {
    this.beerManager.searchBox(this.searchName);
    this.searchName = '';
  }

}
