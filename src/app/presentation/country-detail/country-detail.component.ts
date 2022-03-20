import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit {

  @Input()
  country: Country = {};

  @Input()
  visible = false;

  constructor() { }

  ngOnInit(): void {
  }
}
