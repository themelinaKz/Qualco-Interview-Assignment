import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryService } from 'src/app/api/countries/country.service';
import { CountryWithStats } from 'src/app/api/countries/countryWithStats';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  countryStats: Observable<CountryWithStats[]> = of([]);

  constructor(private countryService: CountryService) {}
  
  ngOnInit(): void {
    this.countryStats = this.countryService.getAllCountriesWithStats();
  }

}
