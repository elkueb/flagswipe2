import {Injectable} from "@angular/core";
import {Country} from "../../models/country.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {WikidataResult} from "./wikidata-result.model";
import {CountryBinding} from "./wikidata-entities.model";

@Injectable({
  providedIn: 'root'
})
export class WikidataService {
  private static readonly SPARQL_ENDPOINT: string = "https://query.wikidata.org/sparql";
  private static readonly COUNTRY_QUERY: string = `
  SELECT ?country ?countryLabel WHERE {
    ?country wdt:P31 wd:Q3624078.
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,de,fr" }
  }
  `;

  constructor(private httpClient: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    const result = this.httpClient.get(WikidataService.SPARQL_ENDPOINT, {params: {'query': WikidataService.COUNTRY_QUERY}});

    return result.pipe(
      map((r) => {
        console.log(r);

        const rconv = r as WikidataResult;

        const maybeCountries: Country[] | undefined = rconv?.results?.bindings?.map(c => {
          const cbind = <CountryBinding>c;
          console.log(cbind.country);
          //console.log(cbind.countryLabel);

          return {"name": cbind.countryLabel?.value} as Country
        })

        if (!maybeCountries) {
          return []
        }
        return maybeCountries
      }));
  }
}
