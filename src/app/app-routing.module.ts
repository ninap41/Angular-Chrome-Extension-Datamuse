import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path : '', component: HomeComponent, pathMatch : 'full',  },
  { path : 'settings', component: SettingsComponent, pathMatch : 'full', data: { state: 'settings' } },
  { path : 'about', component: AboutComponent, pathMatch : 'full', data: { state: 'about' }  },
  { path : 'help', component: HelpComponent, pathMatch : 'full', data: { state: 'help' }  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
