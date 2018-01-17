import React, { Component } from 'react';

class Instructions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'block',
      show: true
    }
  }

  componentWillReceiveProps(newProps) {
    // If playing level
    // Hide intstructions
    if(newProps.playing && !newProps.complete) {
      this.setState({ show: false });
      setTimeout(() => this.setState({ display: 'none' }), 600);
    }

    // If complete with level
    // Show win screen
    if(newProps.complete) {
      this.setState({ display: 'block' });
      setTimeout(() => this.setState({ show: true }), 200);
    }
  }

  nextLevel(num) {
    this.props.hideWindowBox();
    this.props.updateLevelNum(parseInt(this.props.level) + 1);
  }

  render() {
    return (
      <div
        style={{ display: this.state.display }}
        className={ `instructions ${this.state.show ? 'show' : 'hide' }`}>
        <div>

          {/* If not playing */}
          { !this.props.playing &&
            <div>
              <p>{ this.props.instructions }</p>
              <button
                onClick={ this.props.playLevel }
                onTouchStart={ this.props.playLevel }
                className='btn'> Ready </button>
            </div>
          }

          {/* If level complete */}
          { this.props.complete &&
            <div>
              <p>{ this.props.win }</p>
              <button
                onClick={ () => this.nextLevel() }
                onTouchStart={ () => this.nextLevel() }
                className='btn'> Next </button>
            </div>
          }

        </div>
      </div>
    );
  };
}

export default Instructions;
