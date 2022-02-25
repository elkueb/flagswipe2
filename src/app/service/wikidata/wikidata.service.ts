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
    const response = this.httpClient.get(WikidataService.SPARQL_ENDPOINT, {params: {'query': WikidataService.COUNTRY_QUERY}});

    return response.pipe(
      map((content) => {
        const wikidataResult = content as WikidataResult;

        const maybeCountries: Country[] | undefined = wikidataResult?.results?.bindings?.map(c => {
          const countryBinding = <CountryBinding>c;
          console.log(countryBinding.country);
          //console.log(countryBinding.countryLabel);

          return {"name": countryBinding.countryLabel?.value} as Country
        })

        return maybeCountries || [];
      }));
  }
}
