import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/api/countries/country';
import { CountryService } from 'src/app/api/countries/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countries: Observable<Country[]> = this.countryService.getAllCountries();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  showLanguages(countryId: number): void {
    this.router.navigate(['languages'], {
      relativeTo: this.route,
      state: {countryId: countryId}
    });
  }
}
