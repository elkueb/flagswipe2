import {WikidataObject} from "./wikidata-result.model";

export interface CountryBinding {
  country?: WikidataObject
  countryLabel?: WikidataObject
  population?: WikidataObject
  capital?: WikidataObject
  capitalLabel?: WikidataObject
  area?: WikidataObject
  flag?: WikidataObject
}
