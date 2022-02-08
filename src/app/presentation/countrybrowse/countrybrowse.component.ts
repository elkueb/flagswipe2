import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countrybrowse',
  templateUrl: './countrybrowse.component.html',
  styleUrls: ['./countrybrowse.component.less']
})
export class CountrybrowseComponent implements OnInit {
  countries = [
    {name: 'Austria'},
    {name: 'Germany'},
    {name: 'France'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
