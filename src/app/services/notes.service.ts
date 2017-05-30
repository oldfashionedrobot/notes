import { Injectable } from '@angular/core';

import { Note } from '../models/note.model';

@Injectable()
export class NotesService {
  private lastId: number;

  private notes: Note[] = [];

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];

    if(this.notes.length > 0)
      this.lastId = this.notes[this.notes.length - 1].id;
    else
      this.lastId = 0;
  }

  // Simulate POST /notes
  addNote(note: Note): NotesService {
    note.id = ++this.lastId;

    this.notes.push(note);

    this._storeNotes();

    return this;
  }

  // Simulate DELETE /notes/:id
  deleteNote(id: number): NotesService {
    this.notes = this.notes
      .filter(note => note.id !== id);

    this._storeNotes();

    return this;
  }

  // Simulate PUT /notes/:id
  updateNote(id: number, values: Object = {}): Note {
    let note = this.getNote(id);
    if (!note) {
      return null;
    }
    Object.assign(note, values);

    this._storeNotes();

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

  private _storeNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
