import React, { Component } from 'react';

import WindowBox from '../../WindowBox';

class Level_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerAnim: '',
      playing: false,
      complete: false,
      instructions: 'Level 2.',
      win: '👍 '
    }

    this.animationClass = 'show';
    this.playLevel = this.playLevel.bind(this);
    this.levelComplete = this.levelComplete.bind(this);
    this.hideWindowBox = this.hideWindowBox.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.animate('containerAnim'), 200);
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

            <div className='level-2-container'>


            </div>

          </WindowBox>
      </div>
    );
  };
}

export default Level_2;
