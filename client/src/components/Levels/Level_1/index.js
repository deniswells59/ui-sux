import React, { Component } from 'react';

import Crank from './Crank';
import WindowBox from '../../WindowBox';

class Level_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerAnim: '',
      playing: false,
      holding: false,
      instructions: 'Okay, the classic. Turn up the volume to 50.\n You gotta use the crank though. 🙂'
    }

    this.animationClass = 'show';
    this.playLevel = this.playLevel.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.animate('containerAnim'), 1600);
  }

  animate(stateProp) {
    let newState = {};
    newState[stateProp] = this.animationClass;

    this.setState( newState );
  }

  playLevel() {
    this.setState({ playing: true });
  }

  render() {
    return (
      <div className='level-1'>
          <WindowBox
            playLevel={ this.playLevel }
            {...this.state}>

            <div className='level-1-container'>

              <Crank />

            </div>

          </WindowBox>
      </div>
    );
  };
}
/*onMouseMove={ this.rotate }
onMouseUp={ this.endRotate } */
export default Level_1;
