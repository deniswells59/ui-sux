import React, { Component } from 'react';

import Transition from './Transitions/Transition';

class Loader extends Component {
  render() {
    return (
      <div className={ this.props.full ? 'loader-container' : 'loader-wrapper'}>
        <div className='loader'></div>
      </div>
    );
  };
}

let transitionOpts = {
  style: 'top',
  start: '0px',
  end: `-${window.innerHeight}px`,
  duration: 1400
}

export default Transition(Loader, transitionOpts);
