import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileModule } from './profile/profile.module';
import { HighliteTextDirective } from './highlite-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighliteTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ProfileModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
