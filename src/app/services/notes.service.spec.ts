import { TestBed, inject } from '@angular/core/testing';

import { NotesService } from './notes.service';

import { Note } from '../models/note.model';

describe('NotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService]
    });
  });

  it('should ...', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getNotes()', () => {
    it('should return an empty array by default', inject([NotesService], (service: NotesService) => {
      expect(service.getNotes()).toEqual([]);
    }));

    it('should return all notes', inject([NotesService], (service: NotesService) => {
      let note1 = new Note('title', 'body');
      let note2 = new Note('title 2', 'body 2');

      service.addNote(note1);
      service.addNote(note2);

      expect(service.getNotes()).toEqual([note1, note2]);
    }));
  });
});
