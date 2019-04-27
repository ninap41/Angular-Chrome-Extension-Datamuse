import { Component, OnInit } from '@angular/core';
import { DemoMaterialModule } from '../angular-material';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
// import { spinnerFade } from '../animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ ] // spinnerFade
})
export class HomeComponent implements OnInit {
  constructor(
    private ds: DataService,
    private ls: LoaderService
  ) { }

  ngOnInit() {
  }

  public getServiceData(word, type) {
    event.preventDefault();
    this.ds.getData(word, type);
    console.log(`click... ${word} : ${type}`);
  }

  setMyStyles(word) {
      const styles = {
        'background-color': word.score > 70000 ? 'plum' : 'rgb(189, 189, 189)',
      };
      return styles;
    }
  }



