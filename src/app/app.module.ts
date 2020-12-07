import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LesmeublesComponent } from './compnents/lesmeubles/lesmeubles.component';
import { MeubleComponent } from './compnents/meuble/meuble.component';

@NgModule({
  declarations: [
    AppComponent,
    LesmeublesComponent,
    MeubleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
