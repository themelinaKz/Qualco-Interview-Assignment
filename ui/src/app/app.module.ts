import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryService } from './api/countries/country.service';
import { CountryStatsComponent } from './components/countries/country-stats/country-stats.component';
import { ContinentService } from './api/continents/continent.service';
import { FormsModule } from '@angular/forms';
import { RegionService } from './api/regions/region.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguagesComponent,
    CountriesComponent,
    ContinentsComponent,
    CountryStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountryService, ContinentService, RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
