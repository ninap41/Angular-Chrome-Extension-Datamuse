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
  AntObjList: Observable<any>;

  RhymObjList: Observable<any>;
  SynObjList: Observable<any>;
  DefObjList: Observable<any>;


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
            return this.http.get(`${this.url}/words?sp=${this.word}&md=d&max=1`)
            .subscribe((data: Response) => {
              this.DefObjList = data.json();
            },
            (err) => this.errMessage = err,
            () => console.log('done')
            );
            console.log('definition');
            break;
          }
          case 'antonym': {
            return this.http.get(`${this.url}/words?rel_ant=${this.word}`)
            .subscribe((data: Response) => {
              this.AntObjList = data.json();
            },
            (err) => this.errMessage = err,
            () => console.log('done')
            );
            break;
          }
          case 'synonym': {
            return this.http.get(`${this.url}/words?rel_syn=${this.word}&ml=${this.word}`)
              .subscribe((data: Response) => {
                console.log(data.json());
                this.SynObjList = data.json();
              },
              (err) => this.errMessage = err,
              () => console.log('done')
            );
            break;
          }
          default: {
            return this.http.get(`${this.url}/words?rel_rhy=${this.word}`)
              .subscribe((data: Response) => {
                this.SynObjList = data.json();
              },
              (err) => this.errMessage = err,
              () => console.log('done')
            );
            break;
          }
       }

    }

}
