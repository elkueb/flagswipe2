import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flagbrowse',
  templateUrl: './flagbrowse.component.html',
  styleUrls: ['./flagbrowse.component.less']
})
export class FlagbrowseComponent implements OnInit {
  countries = [
    {flag: 'flag1.jpg'},
    {flag: 'flag2.jpg'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
