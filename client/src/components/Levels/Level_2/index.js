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
    }

    this.win          = '👍'
    this.instructions = `Oops, we forgot to talk about the Terms of Service.
                         Go ahead and check it out before you move on.
                         Just scroll through it, probably.`;

    this.playLevel = this.playLevel.bind(this);
    this.levelComplete = this.levelComplete.bind(this);
  }

  // Level Start
  playLevel() {
    this.setState({ playing: true });
  }

  // Level End
  levelComplete() {
    this.setState({ complete: true });
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
          style={{ overflow: this.state.playing ? 'scroll' : 'hidden' }}
          className='level-2-container'>

          <Terms />
          <Questions />

        </div>

      </WindowBox>
    );
  };
}

export default Level_2;
