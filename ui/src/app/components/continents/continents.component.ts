import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContinentService } from 'src/app/api/continents/continent.service';
import { ContinentInfo } from 'src/app/api/continents/contrinent-info';
import { Region } from 'src/app/api/regions/region';
import { RegionService } from 'src/app/api/regions/region.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent implements OnInit {
  continentsInfo: Observable<ContinentInfo[]> = of([]);
  regions: Observable<Region[]> = of([]);

  constructor(
    private continentService: ContinentService,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    this.regions = this.regionService.getAllRegions();
    this.setContinentsInfo();
  }
  
  setContinentsInfo(params?: {regionName?: string; fromYear?: number; toYear?: number;}) {
    this.continentsInfo = this.continentService.getAllContinentsInfo(params);
  }

  applyFilters(region:any, fromYear:any, toYear: any) {
    if (!region || !region.trim().length) {
      region = undefined;
    }
    if (fromYear < 0) {
      fromYear = undefined;
    }
    if (toYear < 0) {
      toYear = undefined;
    }

    this.setContinentsInfo({
      regionName: region,
      fromYear: fromYear,
      toYear: toYear
    });
  }
}
