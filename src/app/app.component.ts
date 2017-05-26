import { Component } from '@angular/core';

import '../assets/styles.scss';

import { Note } from './components/note/note.interface'

@Component({
  selector: 'notes-app',
  template: require('./app.component.html')
})

export class AppComponent {
  notes: Note[] = [
    { title: 'Title', body: 'Some stuff in here.' },
    { title: 'Another Thing', body: 'More stuff in this one.' }
  ];
}
