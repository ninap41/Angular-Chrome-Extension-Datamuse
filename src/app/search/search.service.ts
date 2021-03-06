import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { Context, Set} from '../search/searches.class';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  context = new Context().createContext();
  history = [];
  historyIndex = -1;
  serviceLocalStorage;
  
  constructor(
    private http: Http,
    private ls: LoaderService,
    private snackBar: MatSnackBar
  ) {
    this.history = []
    this.validateCreateStorage();
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
          // console.log(data.json());
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
      isNotBackFor === true ? () => {
      console.log('dont push history');
      console.log(this.historyIndex);
      console.log(JSON.stringify(this.history))
    }
       : this.isNotBackForward() ;
      this.ls.stopSpinner();
    }

    isNotBackForward() {
      console.log('pushing into history') 
      this.history.push(this.context.word);
      this.historyIndex = this.history.length -1;
      console.log(this.historyIndex);
      console.log(JSON.stringify(this.history));
    }

    public goBack(isNotBackFor: boolean) { // we want to be true;
      this.historyIndex -= 1;
      if (this.historyIndex == 0) {
        this.snackBar.open('You went all the way back in your history', '', {
          duration: 2000,
        });
        let previousWord = this.history[this.historyIndex];
        this.createSearch(previousWord, isNotBackFor) // we dont want to push to history
      } else {
        let previousWord = this.history[this.historyIndex];
        this.createSearch(previousWord, isNotBackFor) // we dont want to push to history
        this.snackBar.open(`Went back to previous word...`, `"${this.context.word}"`, {
          duration: 5000,
        });
      }
      console.log('dont push history');
      console.log(this.historyIndex);
      console.log(JSON.stringify(this.history))
    }


    public goForward(isNotBackFor: boolean) { // we want to be true;
      this.historyIndex += 1;
      if (this.historyIndex === this.history.length ) {
        this.snackBar.open(' You went forward. You are at the END of your history', '<span>ViewHistory</span>', {
          duration: 2000,
        });
        this.createSearch(this.context.word, isNotBackFor) // we dont want to push to history
      } else {
        let nextWord = this.history[this.historyIndex];
        this.createSearch(nextWord, true);
        this.historyIndex += 1;
        this.snackBar.open(`Went back to next word...`, `"${this.context.word}"`, {
          duration: 5000,
        });
      }
    }

    validateCreateStorage() {
      if (localStorage.getItem("favorites") === null) { //checks if context exists 
        let obj = { favorites: []}
        localStorage.setItem("favorites", JSON.stringify(obj)); // assigns obj
      } else {
        this.serviceLocalStorage = localStorage.getItem("favorites")
      }
    }

    setNewStorage(tempObj: any) {
      localStorage.setItem("favorites", JSON.stringify(tempObj)); // assigns obj
      this.serviceLocalStorage = JSON.parse(localStorage.getItem('favorites'));
      console.log( this.serviceLocalStorage );
    }

    returnStorage() {
      this.serviceLocalStorage = JSON.parse(localStorage.getItem('favorites'));
      return  this.serviceLocalStorage;
    }

    removeStorageWord(wordToRemove) {
      var temp = this.serviceLocalStorage;
      for(var i = 0; i < temp.favorites.length; i++) {
        console.log(temp.favorites[i]);
        if(temp.favorites[i] = wordToRemove) {
          temp.favorites.splice(i, 1);
        } 
      }      
      localStorage.setItem("favorites", JSON.stringify(temp)); // assigns obj
    }

    downloadFile(data: any) {
      const blob = new Blob([data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }

  } // end of class
