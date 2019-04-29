// import './polyfills';
import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {  DemoMaterialModule } from './angular-material';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
// import { Observable } from 'rxjs';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SettingsComponent,
    HelpComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    // Observable,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DemoMaterialModule,

    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
     DataService,
     LoaderService,

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
