import React from 'react';

class KeySelect extends React.Component {
  renderKeyOptions(keys) {
    return keys.map(key => {
      return <option key={`key-${key}`} value={key}>{key}</option>
    });
  }

  handleChange = (e) => {
    this.props.onKeySelect(e.target.value);
  }

  render() {
    return (
      <form className="ui form" onChange={this.handleChange}>
        <div className="field">
          <label>Select Key</label>
          <select className="ui fluid dropdown">
            <option value="">Key</option>
            { this.renderKeyOptions(this.props.keys) }
          </select>
        </div>
      </form>
    );
  }
}

export default KeySelect;