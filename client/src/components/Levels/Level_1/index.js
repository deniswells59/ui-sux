/*
  Level_1

  The volume level.
  Needs to be reworked.

  REVIEW:

  * Tracking the revolutions
  * Buggy after window drag
  
*/

import React, { Component } from 'react';

import Crank from './Crank';
import WindowBox from '../../WindowBox';

class Level_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      complete: false,
    }

    this.win          = '👍 ';
    this.instructions = `Okay, the classic. Turn up the volume to 50.
                         You gotta use the crank though. 🙂`;

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
      <div className='level-background'>
        <WindowBox
          level={ this.props.session.data.level }
          instructions={ this.instructions }
          win={ this.win }
          playLevel={ this.playLevel }
          levelComplete={ this.levelComplete }
          updateLevelNum={ this.props.updateLevelNum }
          {...this.state}>

          <div className='level-1-container'>

            <Crank
              levelComplete={ this.levelComplete } />

          </div>

        </WindowBox>
      </div>
    );
  };
}

export default Level_1;
