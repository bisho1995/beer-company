import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroImageComponent } from './main/hero-image/hero-image.component';
import { ContentComponent } from './main/content/content.component';
import { BeerlistService } from './shared/services/beerlist.service';
import { BootstrapService } from './shared/services/bootstrap.service';
import { BeerComponent } from './main/beer/beer.component';
import { BeermanagerService } from './shared/services/beermanager.service';
import { FiltersComponent } from './main/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    ContentComponent,
    BeerComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    BeerlistService,
    BootstrapService,
    BeermanagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
