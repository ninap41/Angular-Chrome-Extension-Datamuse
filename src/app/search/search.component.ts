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

  constructor(
    private s: SearchService,
    private ls: LoaderService,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.context =  this.s.context;
  }

  public onSubmit(word: string) {
    this.s.createSearch(word);
  }


}
