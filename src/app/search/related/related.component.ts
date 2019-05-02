import { Component, OnInit, Input  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {
  @Input() con;
  @Input() title;
  @Input() index;

  constructor(
    private snackBar: MatSnackBar,
    private s: SearchService
  ) { }

  ngOnInit() {
  }

  public searchAgain(word: string, boole: boolean) {
    if(word === '') {
      this.snackBar.open(`Please Enter Word`, '', {
        duration: 5000,
      });
    } else {
      this.s.context.word === word ?
      this.snackBar.open(`That word is already displayed (${word})`, '', {
       duration: 5000,
     }) : this.s.createSearch(word, false);
    }
  }

  saveWord(word: any ) {
    let bool = null;
    this.s.context.favorites.forEach(w => {
      if (word === w) {
        bool = true;
      }
    });
    if (bool === true) {
      this.snackBar.open(`That word is already in your favorites (${word})`, '', {
        duration: 5000,
      });
    } else {
      this.s.context.favorites.push(word);
      this.snackBar.open('You favorited', word, {
        duration: 5000,
      });
    }
  }

}
