import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/noteList/noteList.component';

import { NotesService } from './services/notes.service'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NoteComponent,
    NoteListComponent
  ],
  providers: [
    NotesService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
