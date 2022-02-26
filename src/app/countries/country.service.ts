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
  private countryStorage: Storage<Country> | undefined;

  private static readonly COUNTRY_VERSION: number = 1;
  private readonly countries: Observable<Country[]>;
  private readonly underlying: Country[];
  private initialized: boolean;

  constructor(private wikidataService: WikidataService,
              private localStorageService: LocalStorageService) {
    this.countryStorage = localStorageService.getStorage({} as Country);
    this.underlying = []
    this.countries = of(this.underlying)
    this.initialized = false
  }

  getCountries(): Observable<Country[]> {
    if (!this.initialized) {
      let cachedCountries = this.fetchFromLocalStorage()

      if (cachedCountries == null || cachedCountries.length == 0) {
        console.log("Updating countries")
        this.updateCountries();
      } else {
        cachedCountries.forEach(country => this.underlying.push(country))
      }

      this.initialized = true
    }

    return this.countries
  }

  updateCountries(): void {
    this.wikidataService.getCountries().subscribe(countries => {
      countries.forEach(country => this.save(country))
    })
  }

  private fetchFromLocalStorage(): Country[] | null {
    let countryVersion: number = this.localStorageService.fetch("countryVersion") as number

    if (countryVersion == null || countryVersion < CountryService.COUNTRY_VERSION) {
      console.log("Found old countries. Deleting storage")
      this.localStorageService.deleteCountries()
      return null
    }

    let countryList: string[] = this.localStorageService.fetch("countries") as string[]

    if (countryList == null || countryList.length == 0) {
      return null
    } else {
      return countryList.map(name => this.fetchCountry(name))
    }
  }

  private save(country: Country) {
    this.underlying.push(country)
    this.saveToLocalStorage(country)
  }

  private saveToLocalStorage(country: Country): void {
    if (country != null && country.name != null) {
      let countries: string[] = this.localStorageService.fetch("countries") as string[]
      if (countries == null) {
        countries = []
      }
      countries.push(country.name)
      this.localStorageService.save("countries", countries)
      this.countryStorage?.save("country-" + country.name, country)
    } else {
      console.log("Trying to save empty country.")
    }
  }

  private fetchCountry(name: string): Country {
    return this.localStorageService.fetch("country-" + name) as Country;
  }
}

