import React, { Component } from 'react';

class Title extends Component {
  render() {
    let transitions = {
      'WebkitTransition': `all ${this.props.transition ? 0.6 : 0}s ease-out`,
      'MozTransition':    `all ${this.props.transition ? 0.6 : 0}s ease-out`,
      'OTransition':      `all ${this.props.transition ? 0.6 : 0}s ease-out`,
      'transition':       `all ${this.props.transition ? 0.6 : 0}s ease-out`,
    }

    return (
      <div className='abs-center title'>

        <h1>
          <span style={transitions} className={ this.props.titleAnimation1 }>UI</span>
          <span style={transitions} className={ this.props.titleAnimation2 }> / </span>
          <span style={transitions} className={ `s ${this.props.spanAnimation}` }>{this.props.addLetter}</span>
          <span style={transitions}
            className={ `ux ${this.props.titleAnimation2} ${this.props.marginClass}` }>UX</span>
        </h1>

        <p
          className={ `subtitle ${this.props.subtitleAnim}` }>
          a web browser game
        </p>

      </div>
    );
  }
}

export default Title;
