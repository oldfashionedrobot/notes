import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NoteComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
