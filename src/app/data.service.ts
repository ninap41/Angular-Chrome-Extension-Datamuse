import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { LoaderService } from './loader/loader.service';
import { compileBaseDefFromMetadata, compilePipeFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://api.datamuse.com';
  word: string;
  any: string;
  errMessage;
  objRef;
  formatUrl;
  AntObjList: Observable<any>;
  RhymObjList: Observable<any>;
  SynObjList: Observable<any>;
  DefObjList: Observable<any>;

  constructor(
    private http: Http,
    private ls: LoaderService
  ) {

}
    public getData(setWord: string, types: string) {
        if (this.errMessage) { this.errMessage = null; }
        this.word = setWord;
        this.any = types;
        switch (types) {
          case 'rhyme': {
            this.formatUrl = `${this.url}/words?rel_rhy=${this.word}`;
            this.objRef = 'RhymObjList';
            break;
          }
          case 'definition': {
            this.formatUrl = `${this.url}/words?sp=${this.word}&md=d&max=1`;
            this.objRef = 'DefObjList';
            console.log('definition');
            break;
          }
          case 'antonym': {
            this.formatUrl = `${this.url}/words?rel_ant=${this.word}`;
            this.objRef = 'AntObjList';
            break;
          }
          case 'synonym': {
            this.formatUrl = `${this.url}/words?rel_syn=${this.word}&ml=${this.word}`;
            this.objRef = 'SynObjList';
            break;
          }
          default: {
            console.log('no link reference');
            break;
          }
       }

        this.clearData(this.objRef);
        this.ls.createSpinner(`${this.objRef}Spinner`);
        setTimeout(() => {
            return this.http.get(this.formatUrl)
            .subscribe((data: Response) => {
              console.log(data.json());
              this[this.objRef] = data.json();
            },
            (err) => this.errMessage = JSON.stringify(err),
            () =>  this.ls.destroySpinner(`${this.objRef}Spinner`)
          );
        }, 2000);
      }

      clearData(list: string) {
        // tslint:disable-next-line:variable-name
        const arr_list = ['AntObjList',
          'RhymObjList',
          'SynObjList',
          'DefObjList'];
        arr_list.forEach(l => {
            if (l === list) {
              console.log(l);
              console.log(list);
              this[l] = null;
            }
          });
        }

    }

