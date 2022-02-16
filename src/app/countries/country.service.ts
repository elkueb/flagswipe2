import {Injectable} from '@angular/core';
import {Country} from "../models/country.model";
import {Observable, of} from "rxjs";
import {WikidataService} from "../service/wikidata/wikidata.service";
import {LocalStorageService} from "../service/local-storage/local-storage.service";
import {Storage} from "../service/local-storage/local-storage.service";


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly STATIC_COUNTRIES: Country[] = [
    {name: 'Austria'},
    {name: 'Germany'},
    {name: 'France'}
  ]

  private countryStorage: Storage<Country> | undefined;

  constructor(private wikidataService: WikidataService,
              private localStorageService: LocalStorageService) {
    this.countryStorage = localStorageService.getStorage({} as Country);
  }

  getCountries(): Observable<Country[]> {
    const empty = of(this.STATIC_COUNTRIES)

    this.wikidataService.getCountries().subscribe(countries => {
      countries.forEach(country => {
        if (country.name != null) {
          this.countryStorage?.save(country.name, country)
        }
      })
    })

    return empty
  }
}

