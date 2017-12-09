// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Game from './Game.jsx';
// We should probably check prop types
// const propTypes = {
//
// };
// Style

class Root extends Component {
  componentWillMount() {
    this.props.fetchSession();
  }

  renderGame() {
    let { loading } = this.props.session;
    return (
      <div>
        {
          loading  ?
          'Loading...' :
          <Game {...this.props} />
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
