import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <div>
            <h1>
                Qualco Interview Assignment
            </h1>
            <br>
            <nav>
                <a routerLink="/">Home</a>
                <a routerLink="/countries">Countries</a>
                <a routerLink="/countryStats">Country Stats</a>
                <a routerLink="/continents">Continents</a>
            </nav>
        </div>
    `,
    styleUrls: ['./header.component.scss']
  })
export class HeaderComponent {}