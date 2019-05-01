import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { compileBaseDefFromMetadata, compilePipeFromMetadata } from '@angular/compiler';
import { Context, Set} from '../search/searches.class';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  context = new Context().createContext();

  constructor(
    private http: Http,
    private ls: LoaderService
  ) {
    console.log(JSON.stringify(this.context));
  }

  createSearch(word: string): Observable<Context> {
    this.ls.startSpinner();
    const list = ['rhymList', 'synList', 'defList', 'relList'];
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
          data.json().length === 0 ? this.context.errMessage = `
          <br> Sorry Nothing Found For '${this.context.word}.'<br><br>
          <img width="100%" src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif">
          ` : this.context.errMessage = '';
        },
        (err) => console.log('error whoops'),
        () =>  i === list.length - 1 ? this.finished(word) : console.log('continue'),
        );
      }
    }, 2000);
    return of(this.context);
    }

    public finished(word: string) {
      this.context.loadState = false;
      this.context.history.push(word);
      this.ls.stopSpinner();
    }

    downloadFile(data: any) {
      const blob = new Blob([data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }

  } // end of class
