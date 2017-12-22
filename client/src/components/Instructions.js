import React, { Component } from 'react';

class Instructions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'block'
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.playing) {
      setTimeout(() => this.setState({ display: 'none' }), 1200);
    }
  }

  render() {
    return (
      <div
        style={ { display: this.state.display } }
        className={ `instructions ${this.props.playing ? 'hide' : 'show' }`}>
        <div>

          <p>{ this.props.instructions }</p>

          <button
            onClick={ this.props.playLevel }
            className='btn'> Ready </button>

        </div>
      </div>
    );
  };
}

export default Instructions;
