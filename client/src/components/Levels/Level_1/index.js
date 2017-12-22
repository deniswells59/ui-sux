import React, { Component } from 'react';

import Button from './Button';
import WindowBox from '../../WindowBox';

class Level_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerAnim: '',
      timer: 0,
      playing: false,
      holding: false,
      instructions: 'Just follow the UI on this one. It should be pretty self explanitory. 🙂'
    }

    this.animationClass = 'show';
    this.playLevel = this.playLevel.bind(this);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.holding = this.holding.bind(this);
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

  onMouseDown() {
    this.setState({
      holding: true,
      interval: setInterval(this.holding, 1000)
    });
  }

  onMouseUp() {
    this.setState({ holding: false });
    clearInterval(this.state.interval);
  }

  holding() {
    this.setState({ timer: this.state.timer + 1 });
  }

  renderInfo() {
    switch(true) {
      case this.state.timer <= 0:
        return <span>Welcome to Level 1. Press the button to continue.</span>
      case this.state.timer >= 1:
        return <span>Oh, press and <span className='italic'>hold</span>.</span>
    }
  }

  render() {
    return (
      <div className='level-1'>
          <WindowBox
            playLevel={ this.playLevel }
            {...this.state}>

            <div className='level-1-container'>

              <p className='banner'>
                { this.renderInfo() }
              </p>

              <Button
                onMouseUp={ this.onMouseUp }
                onMouseDown={ this.onMouseDown }
                {...this.state} />

            </div>

          </WindowBox>
      </div>
    );
  };
}

export default Level_1;
