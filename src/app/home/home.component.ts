import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoMaterialModule } from '../angular-material';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
// import { spinnerFade } from '../animate';
import { Context } from './searches.class';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material';
import {MatSnackBar} from '@angular/material';

import * as saveAs from 'file-saver';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ ] // spinnerFade,
})
export class HomeComponent implements OnInit {
  empty = '';

  @ViewChild('mytab') tabGroup: MatTabGroup;

  constructor(
    private ds: DataService,
    private ls: LoaderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public getServiceData(tab, word, type) {
    if (type === 'definition') {
      this.tabGroup.selectedIndex = 0;
    } else if (type === 'synonym') {
      this.tabGroup.selectedIndex = 2;
    }
    event.preventDefault();
    this.ds.getData(word, type);
    this.empty = this.ds.errMessage;

  }


saveWord(word: string) {
  let bool = null;
  this.ds.favorites.forEach(w => {
    if (word === w) {
      bool = true;
    }
  });
  if (bool === true) {
    this.snackBar.open(`That word is already in your favorites (${word})`, '', {
      duration: 5000,
    });
  } else {
    this.ds.favorites.push(word);
    this.snackBar.open('You favorited', word, {
      duration: 5000,
    });
  }
}

downloadFile(data: any) {
  this.ds.downloadFile(data);
}

  setMyStylesMat(word) {
      const styles = {
        'background-color': word.score > 70000 ? 'plum' : 'rgb(189, 189, 189)',
      };
      return styles;
    }

  }



