import {Injectable} from '@angular/core';
import {Country} from "../models/country.model";
import {Observable, of} from "rxjs";
import {WikidataService} from "../wikidata/wikidata.service";


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  STATIC_COUNTRIES: Country[] = [
    {name: 'Austria'},
    {name: 'Germany'},
    {name: 'France'}
  ]

  constructor(private wikidataService: WikidataService) {
  }

  getCountries(): Observable<Country[]> {
    const empty = of(this.STATIC_COUNTRIES)

    this.wikidataService.getCountries();

    return empty
  }
}

