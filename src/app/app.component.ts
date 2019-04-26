import { Component } from '@angular/core';
import {  DemoMaterialModule } from './angular-material';
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

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
