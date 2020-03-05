import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Router, NavigationStart } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  fav;
  his;
  displayLStor;
  constructor(
    private s: SearchService,
    private _router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.fav = this.s.context.favorites;
    this.his = this.s.history;
    this.s.validateCreateStorage()
    this.displayLStor = this.s.returnStorage() ;
    console.log("this.displayLStor " +  this.displayLStor.favorites);
  }

  downloadFile(favs: any) {
      this.s.downloadFile(favs);
  }
  
  public searchAgain(word: string, isNotBackFor: boolean) {
    this.s.createSearch(word, isNotBackFor);
    this._router.navigateByUrl('')
  }

  removeFromStorageAndContext(word: string) {
    this.s.removeStorageWord(word);
    this.displayLStor = this.s.returnStorage() ;
  }


  clearStorage(){
    if(localStorage.getItem("favorites") === null) {
        this.snackBar.open(`Your favorites list is already empty...`, '0_0', {
          duration: 5000,
        });
    } else {
      localStorage.clear();
      this.displayLStor.favorites = [];
      this.snackBar.open(`Favorites cleared.`, '^_^', {
        duration: 5000,
      });
    }
    console.log(localStorage);
  }

}
