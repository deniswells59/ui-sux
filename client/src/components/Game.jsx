import React, { Component } from 'react';
import Toolbar from './Toolbar.jsx'
import Board from './Board.jsx'

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <Toolbar {...this.props} />
        <Board {...this.props}   />
      </div>
    );
  };
}
export default Game;
