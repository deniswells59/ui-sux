import React, { Component } from 'react';

import ToolBar from '../../Toolbar.jsx';

class Level_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: true,
      containerAnim: ''
    }

    this.animationClass = 'show';
  }

  componentDidMount() {
    setTimeout(() => this.animate('containerAnim'), 1600);
  }


  animate(stateProp) {
    let newState = {};
    newState[stateProp] = this.animationClass;

    this.setState( newState );
  }


  render() {
    return (
      <div className='level_1'>
        <div className={`level-container ${this.state.containerAnim}`}>
          
        </div>
      </div>
    );
  };
}

export default Level_1;
