import React from 'react';
import { Scale } from '@tonaljs/tonal';

class App extends React.Component {
  state = { scale: null };

  componentDidMount() {
    this.setState({
      scale: Scale.get('c5 melodic minor')
    });
  }

  render() {
    if (!this.state.scale) {
      return <h1>Loading...</h1>;
    }

    return <h1>{this.state.scale.name}</h1>;
  }
}

export default App;
