import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  constructor(
    private s: SearchService
  ) { }

  ngOnInit() {
    this.s.validateCreateStorage();
  }

}
