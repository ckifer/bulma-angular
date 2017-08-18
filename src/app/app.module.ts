import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextInputListModule } from './components/text-input-list/text-input-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextInputListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
