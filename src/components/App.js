import React from 'react';
import { Scale, Note, Chord } from '@tonaljs/tonal';

import KeySelect from './KeySelect';
import DisplayChord from './DisplayChord';

class App extends React.Component {
  state = {
    keys: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D'],
    selectedKey: null,
    firstChord: null,
    secondChord: null
  };

  getScale(note, scaleType) {
    return Scale.get(`${note} ${scaleType}`);
  }

  onKeySelect = (key) => {
    if (key === '') {
      this.setState({
        selectedKey: null,
        firstChord: null,
        secondChord: null
      });

      return;
    }

    const firstNote = Note.transpose(key, '2M');
    const secondNote = Note.transpose(key, '5M');

    const firstChordScaleNote = Note.transpose(firstNote, '3m');
    const secondChordScaleNote = Note.transpose(secondNote, '2m');

    const firstChord = Chord.get(`${firstNote}m7b5`);
    const secondChord = Chord.get(`${secondNote}alt7`);

    const firstChordScale = this.getScale(firstChordScaleNote, 'melodic minor');
    const secondChordScale = this.getScale(secondChordScaleNote, 'melodic minor');

    this.setState({
      selectedKey: key,
      firstChord: {
        chord: firstChord,
        scale: firstChordScale
      },
      secondChord: {
        chord: secondChord,
        scale: secondChordScale
      }
    });
  }

  renderCards() {
    if (this.state.firstChord && this.state.secondChord) {
      return (
        <div className="ui cards">
          <DisplayChord chordData={this.state.firstChord} />
          <DisplayChord chordData={this.state.secondChord} />
        </div>
      );
    } else {
      return (
        <div className="ui card">
          <div className="content">
            <div className="header">Please Select a Key</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui grid centered">
          <div className="ten wide column aligned">
            <h1>Minor II - V Practice Tool</h1>
          </div>
          <div className="row">
            <div className="four wide column">
              <KeySelect keys={this.state.keys} onKeySelect={this.onKeySelect} />
            </div>
          </div>
          <div className="row">
            <div className="twelve wide columns">
              {this.renderCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
