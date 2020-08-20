import React from 'react';
import './Keyboard.css';
import { notes } from '../data/notes';

const Keyboard = ({ selectedNotes }) =>{
  return (
    <div className="keyboard">
      {
        notes.map(note => {
          let noteClasses = 'note';
          let styles = {};

          if (note.isBlackNote) {
            noteClasses += ' note--black';
          }

          if (note.positionRight) {
            styles.right = note.positionRight;
          }

          if (selectedNotes.indexOf(note.text) !== -1) {
            noteClasses += ' note--selected';
          }

          return (
            <div key={note.text}
              style={styles}
              className={noteClasses}>
                {note.text}
            </div>
          );
        })
      }
    </div>
  );
}

export default Keyboard;