import React, { Component } from 'react';

import Crank from './Crank';
import WindowBox from '../../WindowBox';

class Level_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerAnim: '',
      playing: false,
      complete: false,
      instructions: 'Okay, the classic. Turn up the volume to 50.\n You gotta use the crank though. 🙂',
      win: '👍 '
    }

    this.animationClass = 'show';
    this.playLevel = this.playLevel.bind(this);
    this.levelComplete = this.levelComplete.bind(this);
    this.hideWindowBox = this.hideWindowBox.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.animate('containerAnim'), 1600);
  }

  animate(stateProp) {
    let newState = {};
    newState[stateProp] = this.animationClass;

    this.setState( newState );
  }

  hideWindowBox() {
    this.setState({ containerAnim: 'hide '});
  }

  playLevel() {
    this.setState({ playing: true });
  }

  levelComplete() {
    this.setState({ complete: true });
  }

  render() {
    return (
      <div className='level-background'>
        <WindowBox
          hideWindowBox={ this.hideWindowBox }
          playLevel={ this.playLevel }
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
