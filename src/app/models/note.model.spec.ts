import { Note } from './note.model';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note('title', 'body') instanceof Note).toBeTruthy();
  });

  it('should accept title and body params in the contstructor', () => {
    let note = new Note('title', 'body');

    expect(note.title).toEqual('title');
    expect(note.body).toEqual('body');
  });
});
