import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  title = 'flagswipe';

  navigation = [
    { link: '/browse/countries', text: 'Countries'},
    { link: '/browse/flags', text: 'Flags'},
    { link: '/play', text: 'Play'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
