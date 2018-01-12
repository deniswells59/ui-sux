import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Instructions from './Instructions';

class WindowBox extends Component {

  render() {
    return (
      <Draggable
        defaultPosition={{ x: window.innerWidth / 2 - 250, y: window.innerHeight / 2 - 300 }}
        bounds='.level-1'
        handle='.window-bar'>
        <div
          className={`level-container ${this.props.containerAnim}`}>
          <div className='window-bar'></div>

          <Instructions
            { ...this.props } />

          { this.props.children }

        </div>
      </Draggable>
    );
  };
}

export default WindowBox;
