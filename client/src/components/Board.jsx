import React, { Component } from 'react';
import Level from './Level.jsx'

import Level_0 from './Levels/Level_0';

class Board extends Component {

  renderLevel() {
    let { level } = this.props.session.data;

    switch (level) {
      case '0':
        return <Level_0 />
      default:
        return <div></div>;
    }
  }

  render() {
    return (
      <div>
        { this.renderLevel() }
      </div>
    );
  };
}
export default Board;
