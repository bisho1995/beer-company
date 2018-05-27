import { Component, OnInit } from '@angular/core';
import { BootstrapService } from './shared/services/bootstrap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private bootstrap: BootstrapService) {}

  ngOnInit() {
    this.bootstrap.getListOfBeers();
  }

}
