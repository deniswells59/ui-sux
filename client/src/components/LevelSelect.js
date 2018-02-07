/*
  LevelSelect.jsx

  The dropdown in the toolbar.
  Allows user to go back to old levels, but not skip ahead.

*/

import React, { Component } from 'react';

class LevelSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    }
  }

  componentWillReceiveProps(newProps) {
    let selected = newProps.session && newProps.session.data
                      ? newProps.session.data.level
                      : 0;

    if(this.state.selected !== selected) {
      this.setState({ selected });
    }
  }

  renderOptions() {
    let level = this.state.selected;
    let opts = [];

    for(let i = 1; i <= level; i++) {
      opts.push(
        <option
          key={ i }
          value={ i }>
          LEVEL { i }
        </option>
      )
    }

    return opts;
  }

  render() {
    return (
      <div className={`level-select ${this.props.toolbarAnim}`}>
        <div>
          <select value={ this.state.selected }>
            { this.props.session.data && this.renderOptions() }
          </select>
        </div>
      </div>
    );
  };
}

export default LevelSelect;
