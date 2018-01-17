/*
  LevelSelect.jsx

  The dropdown in the toolbar.
  Allows user to go back to old levels, but not skip ahead.

*/

import React, { Component } from 'react';

class LevelSelect extends Component {
  renderOptions() {
    let { level } = this.props.session.data;
    let opts = [];

    level = parseInt(level);

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
          <select defaultValue={this.props.session.data.level}>
            { this.props.session.data && this.renderOptions() }
          </select>
        </div>
      </div>
    );
  };
}

export default LevelSelect;
