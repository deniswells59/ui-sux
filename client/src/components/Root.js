// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Game from './Game.jsx';
// We should probably check prop types
// const propTypes = {
//
// };
// Style

class Root extends Component {
  constructor(props) {
    super(props);

    this.renderGame = this.renderGame.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }

  componentWillMount() {
    this.props.fetchSession();
  }

  changeLevel(levelNum) {
    this.props.updateLevelNum(levelNum);
  }

  renderGame() {
    let { loading } = this.props.session;
    return (
      <div>
        {
          loading  ?
          'Loading...' :
          <Game
            changeLevel={ this.changeLevel }
            {...this.props} />
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderGame() }
      </div>
    );
  }
}

// Root.propTypes = propTypes;

export default Root;
