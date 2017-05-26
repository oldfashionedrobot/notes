import { Component, Input } from '@angular/core';

import { Note } from './note.interface'

@Component({
  selector: 'note',
  template: require('./note.component.html'),
  styles: [require('./note.component.scss')]
})

export class NoteComponent {
  @Input() note: Note[];
}
