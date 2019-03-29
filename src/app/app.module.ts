import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {Homework2Component} from './homework2/homework2.component';
import { Server1Component } from './server1/server1.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Homework2Component,
    Server1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
