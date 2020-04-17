import React from 'react';
import { Scale } from '@tonaljs/tonal';

import KeySelect from './KeySelect';

class App extends React.Component {
  state = {
    keys: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D'],
    selectedKey: null
  };

  onKeySelect = (key) => {
    this.setState({ selectedKey: key });
  }

  render() {
    return (
      <div className="ui container">
        <h1>
          Minor II - V <br />
          Practice Tool
        </h1>

        <KeySelect keys={this.state.keys} onKeySelect={this.onKeySelect} />
      </div>
    );
  }
}

export default App;
