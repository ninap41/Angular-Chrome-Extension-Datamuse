import { Component, OnInit } from '@angular/core';
import {  DemoMaterialModule } from '../angular-material';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private ds: DataService,
  ) { }

  ngOnInit() {

  }

  public getServiceData(word, type) {
    event.preventDefault();
    this.ds.getData(word, type);
    console.log(`click... ${word} : ${type}`);
  }

}


