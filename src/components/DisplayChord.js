import React from 'react';
import Keyboard from './Keyboard';

const DisplayChord = ({ chordData }) => {
  if (chordData) {
    return (
      <div className="card">
        <div className="content">
            <div className="header">{chordData.chord.tonic + chordData.chord.aliases[0]}</div>
              <div className="meta">{chordData.scale.name}</div>
            <div className="description">
              <div className="ui horizontal list">
                { chordData.scale.notes.map(note => {
                    return <div key={note} className="item">{note}</div>
                }) }
              </div>
              <Keyboard selectedNotes={chordData.scale.notes} />
            </div>
        </div>
      </div>
    );
  }

  return null;
}

export default DisplayChord;