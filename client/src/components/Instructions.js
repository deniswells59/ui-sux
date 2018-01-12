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
    if(newProps.playing && !newProps.complete) {
      this.setState({ show: false });
      setTimeout(() => this.setState({ display: 'none' }), 700);
    }

    if(newProps.complete) {
      this.setState({ display: 'block' });
      setTimeout(() => this.setState({ show: true }), 200);
    }
  }

  nextLevel(num) {
    this.props.hideWindowBox();
    this.props.updateLevelNum(num);
  }

  render() {
    return (
      <div
        style={{ display: this.state.display }}
        className={ `instructions ${this.state.show ? 'show' : 'hide' }`}>
        <div>

          { this.state.display === 'block' && !this.props.complete &&
              <p>{ this.props.instructions }</p> }

          { this.props.complete &&
              <p>{ this.props.win }</p> }

          { !this.props.playing &&
            <button
              onClick={ this.props.playLevel }
              onTouchStart={ this.props.playLevel }
              className='btn'> Ready </button>
          }
          { this.props.complete &&
            <button
              onClick={ () => this.nextLevel('2') }
              onTouchStart={ () => this.nextLevel('2') }
              className='btn'> Next </button>
          }

        </div>
      </div>
    );
  };
}

export default Instructions;
