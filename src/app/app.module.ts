import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragComponent } from './components/drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaisesComponent } from './components/paises/paises.component';


@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
