import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './search.service';
import { LoaderService } from '../loader/loader.service';
import { Context } from '../search/searches.class';
import { Observable } from 'rxjs';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { listAnimation } from '../animate';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [ listAnimation ],
})
export class SearchComponent implements OnInit {
// @ViewChild('wordForm') formValue; // Added this

context;
title = ['Word', 'Synonym', 'Antonyms', 'Related Words', 'Rhymes'];

  constructor(
    private s: SearchService,
    private ls: LoaderService,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.context =  this.s.context;
  }

  public onSubmit(word: string, isNotBackFor: boolean) {
    if(word === '') {
      this.snackBar.open(`Please Enter Word`, 'You Left The Field Blank', {
        duration: 5000,
      });
    } else {
      this.s.context.word === word ?
      this.snackBar.open(`That word is already displayed (${word})`, '', {
       duration: 5000,
     }) : this.s.createSearch(word, isNotBackFor); // boolean is for if we DONT want to push to history
    }
  }
  

}
