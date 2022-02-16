import {Injectable} from '@angular/core';
import {Country} from "../models/country.model";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  STATIC_COUNTRIES: Country[] = [
    {}
  ]

  constructor() {
  }

  getCountries(): Observable<Country[]> {
    const empty = of(this.STATIC_COUNTRIES)
    return empty
  }
}

