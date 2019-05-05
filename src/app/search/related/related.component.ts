import { Component, OnInit, Input  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';
import { SearchService } from '../search.service';
import { listAnimation } from '../../animate';
import { LoaderService } from '../../loader/loader.service'
import { Favorites } from '../favorites.class';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
  animations: [ listAnimation ],

})
export class RelatedComponent implements OnInit {
  @Input() con;
  @Input() title;
  @Input() index;

  constructor(
    private snackBar: MatSnackBar,
    private s: SearchService,
    private ls: LoaderService
  ) { }

  ngOnInit() {
    this.s.validateCreateStorage();
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

saveWord2(word: any) {
    let tempObj = this.s.returnStorage();
    console.log(tempObj);
    let bool = null;
    tempObj.favorites.forEach(w => {
      if (word === w) {
        bool = true;
      }
    });
    if (bool === true) {
      this.snackBar.open(`That word is already in your favorites (${word})`, '', {
        duration: 5000,
      });
    } else {
      tempObj.favorites.push(word);
      this.s.setNewStorage(tempObj);
      this.snackBar.open('You favorited', word, {
        duration: 5000,
      });
    }
  // let tempList = JSON.parse(localStorage.getItem("favorites"))
  // tempList.push(word);
  // localStorage.setItem('favorites', JSON.stringify(tempList));
  // console.log(localStorage);

}
  saveWord(word: any ) { //
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
