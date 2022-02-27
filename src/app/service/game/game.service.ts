import {Injectable} from "@angular/core";
import {CountryService} from "../../countries/country.service";
import {map, Observable} from "rxjs";
import {Country} from "../../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private countryService: CountryService) {
  }

  public question(): Observable<SwipeCard> {
    return this.countryService.getCountries()
      .pipe(
        map((countries) => {
          let twoCountries = GameService.randomCountries(countries)

          return {
            "countryId1": twoCountries[0].id,
            "countryId2": twoCountries[1].id,
            "name": twoCountries[0].name,
            "capital": twoCountries[1].capital
          } as SwipeCard
        }));
  }

  private static randomCountries(countries: Country[]): [Country, Country] {
    let length = countries.length

    let c1index = GameService.randomInt(0, length)
    let c2index = GameService.randomInt(0, length)
    if (c2index == c1index) {
      c2index += 1
    }

    return [countries[c1index], countries[c2index]]
  }

  private static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
