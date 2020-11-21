import { Note } from './note.model';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor() { }

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    //add a note to the notes array and return the id of the note
    //where the id = index;
    let newLenght = this.notes.push(note);
    let index = newLenght - 1;
    return index;
  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
    //this.notes[id].title = title;
    //this.notes[id].body = body;
  }

  delete(id: number) {
    this.notes.splice(id, 1);
  }
}
