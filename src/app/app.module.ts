import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './presentation/navigation/navigation.component';
import {FlagbrowseComponent} from './presentation/flagbrowse/flagbrowse.component';
import {CountrybrowseComponent} from './presentation/countrybrowse/countrybrowse.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WelcomeComponent} from './presentation/welcome/welcome.component';
import {SwipegameComponent} from "./presentation/swipegame/swipegame.component";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TableModule} from "primeng/table";
import { CountryDetailComponent } from './presentation/country-detail/country-detail.component';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FlagbrowseComponent,
    CountrybrowseComponent,
    WelcomeComponent,
    SwipegameComponent,
    CountryDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    DragDropModule,
    TableModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
