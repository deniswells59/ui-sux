/*
  Toolbar.jsx

  The black toolbar in the game.
  Doesn't show on Level 0.

*/

import React, { Component } from 'react';
import LevelSelect from './LevelSelect.jsx'

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolbarAnim: '',
    }

    this.animationClass = 'show';

    this.animateToolbar = this.animateToolbar.bind(this);
  }

  componentDidMount() {
    this.animateToolbar();
  }

  animateToolbar() {
    // On Level 1, wait a little but longer for
    // intro animation
    setTimeout(() => this.animate('toolbarAnim'), 1600);
  }

  animate(stateProp) {
    let newState = {};
    newState[stateProp] = this.animationClass;

    this.setState( newState );
  }

  render() {
    return (
      <div className={`toolbar ${this.state.toolbarAnim}`}>
        <LevelSelect {...this.state} {...this.props} />
      </div>
    );
  };
}

export default Toolbar;
