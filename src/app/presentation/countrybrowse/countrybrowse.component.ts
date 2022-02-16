import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../countries/country.service";
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-countrybrowse',
  templateUrl: './countrybrowse.component.html',
  styleUrls: ['./countrybrowse.component.less']
})
export class CountrybrowseComponent implements OnInit {
  countries: Country[] = [
    {name: 'Austria'},
    {name: 'Germany'},
    {name: 'France'}
  ]

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.updateCountries()
  }

  updateCountries() {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

}
