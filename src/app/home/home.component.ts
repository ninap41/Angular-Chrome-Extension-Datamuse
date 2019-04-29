import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoMaterialModule } from '../angular-material';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
// import { spinnerFade } from '../animate';
import { Context } from './searches.class';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ ] // spinnerFade
})
export class HomeComponent implements OnInit {
  empty = '';
  @ViewChild('mytab') tabGroup: MatTabGroup;

  constructor(
    private ds: DataService,
    private ls: LoaderService
  ) { }

  ngOnInit() {
  }

  public getServiceData(tab, word, type) {
    event.preventDefault();
    this.ds.getData(word, type);
    this.empty = this.ds.errMessage;
    if (type === 'definition') {
      this.tabGroup.selectedIndex = 0;
    } else if (type === 'synonym') {
      this.tabGroup.selectedIndex = 2;
    }
  }



  setMyStyles(word) {
      const styles = {
        'background-color': word.score > 70000 ? 'plum' : 'rgb(189, 189, 189)',
      };
      return styles;
    }
  }



