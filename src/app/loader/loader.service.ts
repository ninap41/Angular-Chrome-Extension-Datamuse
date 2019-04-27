import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderComponent } from './loader.component';
import { DataLoader } from './loader.class';


@Injectable({
    providedIn: 'root',
  })

  export class LoaderService {
    RhymObjListSpinner  = new DataLoader();
    DefObjListSpinner  = new DataLoader();
    AntObjListSpinner = new DataLoader();
    SynObjListSpinner  = new DataLoader();
    RelObjListSpinner  = new DataLoader();


    constructor() {
    }

    createSpinner(type: string) {
      this[type].loading = true;
      return;
    }

    destroySpinner(type: string) {
        this[type].loading = false;
        return;
    }
  }
