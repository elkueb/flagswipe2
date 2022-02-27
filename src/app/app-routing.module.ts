import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountrybrowseComponent} from "./presentation/countrybrowse/countrybrowse.component";
import {FlagbrowseComponent} from "./presentation/flagbrowse/flagbrowse.component";
import {WelcomeComponent} from "./presentation/welcome/welcome.component";
import {SwipegameComponent} from "./presentation/swipegame/swipegame.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'browse/countries', component: CountrybrowseComponent},
  {path: 'browse/flags', component: FlagbrowseComponent},
  {path: 'play', component: SwipegameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
