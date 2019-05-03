
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';
import { DemoMaterialModule } from '../angular-material';
import { LoaderService } from './loader.service';
import {spinnerFade} from '../animate';


@Component({
    selector: 'app-loader',
    styleUrls: ['./loader.component.scss'],
    animations: [spinnerFade],
    template:
        `
          <mat-progress-spinner
          [@spinnerFade]="this.ls.uniSpinner.loading === true ? 'show' : 'hide'"
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


