import { Component } from '@angular/core';

import { NotesService } from '../../services/notes.service'

import { Note } from '../../models/note.model'

@Component({
  selector: 'note-list',
  template: require('./noteList.template')
  // styles: [require('./note.styles')]
})

export class NoteListComponent {
  private notes: Note[];

  constructor(private notesService: NotesService) {
    this.notes = notesService.getNotes();
  }

  createNote(): void {
    this.notesService.addNote(new Note(1, 'newguy', 'some text please'));
  }
}
