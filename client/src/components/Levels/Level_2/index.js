/*
  Level 2

  TOS Level.

  Pretty straight forward.
*/
import React, { Component } from 'react';

import WindowBox from '../../WindowBox';
import Terms from './Terms.js';
import Questions from './Questions.js';

class Level_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      complete: false,
      accepting: false,
      sure: false
    }

    this.win          = '👍'
    this.instructions = `Oops, we forgot to talk about the Terms of Service.
                         Go ahead and check it out before you move on.
                         Just scroll through it, probably.`;

    this.playLevel = this.playLevel.bind(this);
    this.levelComplete = this.levelComplete.bind(this);
    this.userIs = this.userIs.bind(this);
    this.userIsNot = this.userIsNot.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  // Level Start
  playLevel() {
    this.setState({ playing: true });
  }

  // Level End
  levelComplete() {
    this.setState({ complete: true });
  }

  userIs(prop) {
    let newState = {};

    newState[prop] = true;

    this.setState( newState, this.scrollToBottom);
  }

  userIsNot(prop) {
    let newState = {};

    newState[prop] = false;

    this.setState( newState );
  }

  scrollToTop() {
    this.scrollContainer.scrollTop = 0;
  }

  scrollToBottom() {
    this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
  }

  render() {
    return (
      <WindowBox
        level={ this.props.session.data.level }
        instructions={ this.instructions }
        win={ this.win }
        playLevel={ this.playLevel }
        levelComplete={ this.levelComplete }
        updateLevelNum={ this.props.updateLevelNum }
        {...this.state}>

        <div
          ref={ ref => this.scrollContainer = ref }
          style={{ overflow: this.state.playing ? 'scroll' : 'hidden' }}
          className='level-2-container'>

          <Terms />

          <Questions
            userIs={ this.userIs }
            userIsNot={ this.userIsNot }
            levelComplete={ this.levelComplete }
            scrollToTop={ this.scrollToTop }
            { ...this.state } />

        </div>

      </WindowBox>
    );
  };
}

export default Level_2;
