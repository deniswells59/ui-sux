import React, { Component } from 'react';
import Level from './Level.jsx'

import TransitionWrapper from './Transitions/TransitionWrapper';
import Level_0 from './Levels/Level_0';
import Level_1 from './Levels/Level_1';
import Level_2 from './Levels/Level_2';

class Board extends Component {

  renderLevel() {
    let { level } = this.props.session.data;

    return (
      <div>
        <TransitionWrapper>
          { level === '0' && <Level_0 {...this.props}/> }
        </TransitionWrapper>
        <TransitionWrapper>
          { level === '1' && <Level_1 {...this.props}/> }
        </TransitionWrapper>
        <TransitionWrapper>
          { level === '2' && <Level_2 {...this.props}/> }
        </TransitionWrapper>
      </div>
    )
  }

  render() {
    return (
      <div>

        { this.renderLevel() }

      </div>
    );
  };
}
export default Board;
