import { Component } from '@angular/core';
import { routerTransition  } from './animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {

  title = 'chrome-angular';
  content;
  constructor(
  ) {}

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
