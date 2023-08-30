import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryStatsComponent } from './components/countries/country-stats/country-stats.component';
import { LanguagesComponent } from './components/languages/languages.component';

const routes: Routes = [ 
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/languages', component: LanguagesComponent },
  { path: 'countryStats', component: CountryStatsComponent },
  { path: 'continents', component: ContinentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
