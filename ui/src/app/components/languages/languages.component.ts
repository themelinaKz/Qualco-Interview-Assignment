import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { CountryLanguage } from 'src/app/api/countries/country-language/country-language';
import { CountryService } from 'src/app/api/countries/country.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  officialLanguage?: CountryLanguage;
  nonOfficialLanguages?: Observable<CountryLanguage[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    const  countryId = history.state?.countryId;
    if (countryId) {
      this.nonOfficialLanguages = this.countryService.getAllLanguagesOfACountry(countryId)
        .pipe(
          map((languages) => {
            this.officialLanguage = languages.find((l) => l.official);
            return languages.filter((l) => !l.official);
          }));
    }
  }

  goBack() {
    this.router.navigate(['countries']);
  }

}
