import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../countries/country.service";
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-countrybrowse',
  templateUrl: './countrybrowse.component.html',
  styleUrls: ['./countrybrowse.component.less']
})
export class CountrybrowseComponent implements OnInit {
  countries: Country[] = []
  country: Country | undefined;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.country = undefined
    this.updateCountries()
  }

  updateCountries() {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

  onSelect(country: Country): void {
    this.country = country
  }
}
