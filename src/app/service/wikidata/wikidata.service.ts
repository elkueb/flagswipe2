import {Injectable} from "@angular/core";
import {Country} from "../../models/country.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {WikidataResult} from "./wikidata-result.model";
import {CountryBinding} from "./wikidata-entities.model";
import {v4 as uuidv4} from 'uuid';

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

          return {
            "name": countryBinding.countryLabel?.value,
            "wikidataLink": countryBinding.country?.value,
            "id": uuidv4()
          } as Country
        })

        return maybeCountries || [];
      }));
  }

  enrichCountry(country: Country): Observable<Country> {
    if (country.wikidataLink == null) {
      return of({})
    }

    let entityRegex = new RegExp('Q[0-9]*')
    let searchResult = entityRegex.exec(country.wikidataLink)
    let entityId = searchResult ? searchResult[0] : null

    if (entityId != null) {
      country.wikidataId = entityId

      // Eh sche, aber da kommen wir erstmal nicht weit weil wir nur die Statements fetchen.
      // Dann müssten wir da noch die betroffenen anderen Entities dazu holen um schlauer zu werden.
      // Fazit: Das ganze muss ins "main" sparql query hinein...
      // Alles andere wird noch zacher.
      //var response = this.httpClient.get("https://www.wikidata.org/wiki/Special:EntityData" + entityId + ".json")

      //return response.pipe(
      //  map(content => {
      //

      //    return {} as Country
      //  })
      //);
    }

    return of({})
  }
}
