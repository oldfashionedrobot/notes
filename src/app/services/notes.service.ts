import { Injectable } from '@angular/core';

import { Note } from '../models/note.model';

@Injectable()
export class NotesService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  private lastId: number = 3;

  // Placeholder for todo's
  private notes: Note[] = [
    new Note(1, 'Title', 'Some stuff in here.'),
    new Note(2, 'Another Thing', 'More stuff in this one.')
  ];

  constructor() {}

  // Simulate POST /notes
  addNote(note: Note): NotesService {
    note.id = ++this.lastId;

    this.notes.push(note);
    return this;
  }

  // Simulate DELETE /notes/:id
  deleteNote(id: number): NotesService {
    this.notes = this.notes
      .filter(note => note.id !== id);
    return this;
  }

  // Simulate PUT /notes/:id
  updateNote(id: number, values: Object = {}): Note {
    let note = this.getNote(id);
    if (!note) {
      return null;
    }
    Object.assign(note, values);
    return note;
  }

  // Simulate GET /notes
  getNotes(): Note[] {
    return this.notes;
  }

  // Simulate GET /notes/:id
  getNote(id: number): Note {
    return this.notes
      .filter(note => note.id === id)
      .pop();
  }
}
