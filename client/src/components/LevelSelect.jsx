import React, { Component } from 'react';

class LevelSelect extends Component {
  renderOptions() {
    let { level } = this.props.session.data;
    let opts = [];

    level = parseInt(level);

    for (var i = 1; i <= level; i++) {
      opts.push(
        <option
          key={i}
          value={level}>
          LEVEL { level }
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
