import { Component, Input } from '@angular/core';

import { Note } from '../../models/note.model'

@Component({
  selector: 'note',
  template: require('./note.template'),
  styles: [require('./note.styles')]
})

export class NoteComponent {
  @Input() note: Note[];
}
