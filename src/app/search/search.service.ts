import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { compileBaseDefFromMetadata, compilePipeFromMetadata } from '@angular/compiler';
import { Context, Set} from '../search/searches.class';
import { MatSnackBar } from '@angular/material';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  context = new Context().createContext();
  history = [];
  historyIndex = -1;

  constructor(
    private http: Http,
    private ls: LoaderService,
    private snackBar: MatSnackBar
  ) {
  }

  createSearch(word: string): Observable<Context> {
    this.ls.startSpinner();
    const list = ['rhymList', 'synList', 'defList', 'relList', 'antList'];
    this.context.word = word;
    // tslint:disable-next-line:prefer-for-of
    setTimeout(() => {

    for (let i = 0; i < list.length; i++) {
      // tslint:disable-next-line:prefer-const
      let url = this.context.createUrl(list[i]);
      this.http.get(url)
        .subscribe((data: Response) => {
          console.log(data.json());
          this.context.searchDict[list[i]] = data.json();
          i === list.length - 1 ? this.validator( this.context.searchDict, list) : console.log('continue')
        },
        (err) => console.log('error whoops'),
        () =>  i === list.length - 1 ? this.finished(this.context.word) : console.log('continue'),
        );
      }
    }, 2000);
  
    return of(this.context);
    }


    validator(searchDict: object,keys: Array<string>) {
      let emptyBreakPoint = keys.length;
      let emptyCount = 0;
      keys.forEach(key => {
        searchDict[key].length === 0 ? emptyCount += 1 : console.log('nah');
      });
        emptyCount === emptyBreakPoint ? 
        this.context.errMessage = `
          <br> Sorry Nothing Found For '${this.context.word}.'<br><br>
          <img width="100%" src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif">
          ` : this.context.errMessage = '';
          return this.context.errMessage;
    }

    public finished(word: string) {
      console.log(word);
      this.history.push(word);
      this.historyIndex += 1;
      this.ls.stopSpinner();
    }

    public goBack() {
      this.historyIndex -= 1;
      if (this.historyIndex == 0 ) {
        this.snackBar.open('You went all the way back in your history', '', {
          duration: 2000,
        });
        let previousWord = this.history[this.historyIndex];
        this.createSearch(previousWord)
        this.history = [];
        this.historyIndex -= 1;
      } else {
        let previousWord = this.history[this.historyIndex];
        this.createSearch(previousWord)
        this.historyIndex -= 1;
        this.snackBar.open(`Went back to previous word...`, `"${this.context.word}"`, {
          duration: 5000,
        });
      }

    }

    downloadFile(data: any) {
      const blob = new Blob([data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }

  } // end of class
