import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path : '', component: SearchComponent, pathMatch : 'full',  },
  { path : 'settings', component: SettingsComponent, pathMatch : 'full', data: { state: 'settings' } },
  { path : 'about', component: AboutComponent, pathMatch : 'full', data: { state: 'about' }  },
  { path : 'help', component: HelpComponent, pathMatch : 'full', data: { state: 'help' }  },
  { path : 'favorites', component: FavoritesComponent, pathMatch : 'full', data: { state: 'favorites' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
