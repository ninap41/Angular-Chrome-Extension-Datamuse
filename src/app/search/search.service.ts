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

  createSearch(word: string, isNotBackFor: boolean): Observable<Context> {
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
        (err) => this.context.errMessage = `Datamuse API problem. Ain't me!` + '\n' + `${JSON.stringify(err)}`,
        () =>  i === list.length - 1 ? this.finished(this.context.word, isNotBackFor) : console.log('continue'),
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

    public finished(word: string, isNotBackFor: boolean) {
      isNotBackFor ? console.log('dont push history') : this.isNotBackForward() ;
      this.ls.stopSpinner();
    }

    isNotBackForward() {
      console.log('pushing into history') 
      this.history.push(this.context.word);
      this.historyIndex += 1;
    }

    public goBack() {
      this.historyIndex -= 1;
      if (this.historyIndex == 0 ) {
        this.snackBar.open('You went all the way back in your history', '', {
          duration: 2000,
        });
        let previousWord = this.history[this.historyIndex];
        this.createSearch(previousWord, true) // we dont want to push to history
        this.history = [];
        this.historyIndex -= 1;
      } else {
        let previousWord = this.history[this.historyIndex];
        this.createSearch(previousWord, true) // we dont want to push to history
        this.historyIndex -= 1;
        this.snackBar.open(`Went back to previous word...`, `"${this.context.word}"`, {
          duration: 5000,
        });
      }
    }
// WIP forward button
    public goForward() {
      this.historyIndex += 1;
      if (this.historyIndex === this.history.length - 1 ) {
        this.snackBar.open(' You went forward. You are at the END of your history', '', {
          duration: 2000,
        });
        this.historyIndex -= 1;
      } else {
        let nextWord = this.history[this.historyIndex];
        this.createSearch(nextWord, true);
        this.historyIndex += 1;
        this.snackBar.open(`Went back to next word...`, `"${this.context.word}"`, {
          duration: 5000,
        });
      }
    }
// WIP forward button

    downloadFile(data: any) {
      const blob = new Blob([data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }

  } // end of class
