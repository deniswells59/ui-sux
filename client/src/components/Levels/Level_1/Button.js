import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: '50px'
    }
  }

  componentDidMount() {
    this.setState({ width: this.button.offsetWidth });
  }

  render() {
    return (
      <button

        ref={ button => { this.button = button } }
        onMouseDown={ this.props.onMouseDown }
        onMouseUp={ this.props.onMouseUp }
        className='button'>
        { this.props.holding ?
          <p>Hold This</p> :
          <p>Press This</p>
        }
      </button>
    );
  };
}

export default Button;
