import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Girl
import { DemoMaterialModule } from './angular-material'; // only needs to be in module;
// Routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { RelatedComponent } from './search/related/related.component';

// Services
import { LoaderService } from './loader/loader.service';
import { SearchService } from './search/search.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SettingsComponent,
    HelpComponent,
    LoaderComponent,
    SearchComponent,
    RelatedComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
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
     LoaderService,
     SearchService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
