import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://api.datamuse.com';
  word: string;
  any: string;
  errMessage;

  RhymObjList: Observable<any>;

  constructor(
    private http: Http,
  ) {

}


    // const requestOptions = {
    //   headers: new Headers(headerDict),
    // };


    public getData(setWord: string, types: string) {
        this.word = setWord;
        this.any = types;
        switch (types) {
          case 'rhyme': {
            return this.http.get(`${this.url}/words?rel_rhy=${this.word}`)
              .subscribe((data: Response) => {
                this.RhymObjList = data.json();
              },
              (err) => this.errMessage = err,
              () => console.log('done')
            );
            break;
          }
          case 'definition': {
            console.log('definition');
            break;
          }
          case 'antonym': {
            console.log('antonym');
            break;
          }
          case 'synonym': {
            console.log('synonym');
            break;
          }
          default: {
            return this.http.get(`${this.url}/words?rel_rhy=${this.word}`)
              .subscribe((data: Response) => {
                this.RhymObjList = data.json();
              },
              (err) => this.errMessage = err,
              () => console.log('done')
            );
            break;
          }
       }

    }

}
