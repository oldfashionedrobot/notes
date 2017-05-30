import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/noteList/noteList.component';

import { NotesService } from './services/notes.service';

const appRoutes: Routes = [
  {
    path: 'notes', component: NoteListComponent
  },
  {
    path: 'notes/:id', component: NoteComponent
  },
  { path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
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
