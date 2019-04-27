
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';
import { DemoMaterialModule } from '../angular-material';
import { LoaderService } from './loader.service';


@Component({
    selector: 'app-loader',
    styleUrls: ['./loader.component.scss'],
    template:
        `
          <mat-progress-spinner
            class='spinner'
            color='primary'
            mode='indeterminate'
            value='value'>
          </mat-progress-spinner>
        `
})

export class LoaderComponent implements OnInit {
  constructor(
    private ls: LoaderService
  ) {

  }
  ngOnInit() {
  }

}

