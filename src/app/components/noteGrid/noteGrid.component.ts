import { Component } from '@angular/core';

import { NotesService } from '../../services/notes.service'

import { Note } from '../../models/note.model'

@Component({
  selector: 'note-grid',
  template: require('./noteGrid.template')
  // styles: [require('./note.styles')]
})

export class NoteGridComponent {
  private notes: Note[];

  constructor(private notesService: NotesService) {
    this.notes = notesService.getNotes();
  }

  createNote(): void {
    this.notesService.addNote(new Note('newguy', 'some text please'));
  }
}
