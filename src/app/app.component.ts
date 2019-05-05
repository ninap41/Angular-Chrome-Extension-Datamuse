import { Component } from '@angular/core';
import { routerTransition  } from './animate';
import { SearchService } from './search/search.service';

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
    private s: SearchService
  ) {
    this.s.validateCreateStorage();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
