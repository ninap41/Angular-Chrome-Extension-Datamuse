import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {
  fav;
  his
  constructor(
    private s: SearchService
  ) { }

  ngOnInit() {
    this.fav = this.s.context.favorites;
    this.his = this.s.history;
  }
  downloadFile(favs: any) {
      this.s.downloadFile(favs);
  }
  public searchAgain(word: string, isNotBackFor: boolean) {
    this.s.createSearch(word, isNotBackFor);
  }

}
