import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagsInputModule } from './components/tags-input/tags-input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    TagsInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
