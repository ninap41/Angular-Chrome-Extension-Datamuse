import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {
  fav;
  constructor(
    private s: SearchService
  ) { }

  ngOnInit() {
    this.fav = this.s.context.favorites;
  }
  downloadFile(favs: any) {
      this.s.downloadFile(favs);
  }

}
