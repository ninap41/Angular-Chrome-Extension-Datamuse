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
    uniSpinner = new DataLoader();

    constructor() {
    }

    startSpinner() {
      this.uniSpinner.loading = true;
    }

    stopSpinner() {
      this.uniSpinner.loading = false;
    }
  }
