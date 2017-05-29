import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/noteList/noteList.component';

import { NotesService } from './services/notes.service';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NoteComponent,
        NoteListComponent
      ],
      providers: [NotesService]
    });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
