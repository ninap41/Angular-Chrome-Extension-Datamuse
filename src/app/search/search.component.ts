import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { LoaderService } from '../loader/loader.service';
import { Context } from '../search/searches.class';
import { Observable } from 'rxjs';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
context;
title = ['Word', 'Synonym', 'Antonyms', 'Related Words', 'Rhymes'];
currentIndex;
  constructor(
    private s: SearchService,
    private ls: LoaderService,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.context =  this.s.context;
    this.currentIndex = 0;

  }

  public goBack() {
   // working on
    // if (this.currentIndex === 0 || this.currentIndex === -1) {
    //   this.snackBar.open('You went all the way back in your history', '', {
    //     duration: 2000,
    //   });
    // } else {
    //   this.currentIndex -= 1;
    //   const word = this.s.context.history[this.currentIndex];
    //   this.snackBar.open(`Went back to previous word...`, `"${word}"`, {
    //     duration: 5000,
    //   });
    //   this.onSubmit(word);
    //   this.currentIndex -= 1;
    // }
  }
  public onSubmit(word: string) {
    this.s.createSearch(word);
    this.currentIndex += 1;

  }


}
