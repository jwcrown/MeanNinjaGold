import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LogComponent } from './log/log.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
