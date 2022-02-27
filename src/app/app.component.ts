import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'flagswipe';

  navigation = [
    { link: '/browse/countries', text: 'Countries'},
    { link: '/browse/flags', text: 'Flags'},
    { link: '/play', text: 'Play'}
  ]
}
