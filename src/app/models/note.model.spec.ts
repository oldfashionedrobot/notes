import { Note } from './note.model';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note(1, 'title', 'body') instanceof Note).toBeTruthy();
  });

  it('should accept id, title and body params in the contstructor', () => {
    let note = new Note(1, 'title', 'body');

    expect(note.id).toEqual(1);
    expect(note.title).toEqual('title');
    expect(note.body).toEqual('body');
  });
});
